#!/usr/bin/env ruby

require "csv"
require "net/http"
require "net/http/persistent"
require "net/https"
require "nmap/program"
require "nmap/xml"
require "optparse"
require "ostruct"
require "text-table"
require "uri"
require "thread"
require "yaml"
require "logger"
require "sqlite3"
require "fileutils"

VERSION = '2.3'

class String
  def red; colorize(self, "\e[1m\e[31m"); end
  def green; colorize(self, "\e[1m\e[32m"); end
  def bold; colorize(self, "\e[1m"); end
  def colorize(text, color_code)  "#{color_code}#{text}\e[0m" end
end

class MultiDelegator
  def initialize(*targets)
    @targets = targets
  end

  def self.delegate(*methods)
    methods.each do |m|
      define_method(m) do |*args|
        @targets.map { |t| t.send(m, *args) }
      end
    end
    self
  end

  class <<self
    alias to new
  end
end

class Scanner
  def initialize(paths_filename, nmap_filename, target_file, savedURLs_filename, target_ips_range, scan_port_range, scan_all_ports, brute_force_mode, number_of_threads)
    FileUtils::mkdir_p 'logs'
    scriptlog = 'logs/script_output_' + Time.now.strftime('%Y-%m-%d_%H-%M-%S') + '.log'
    $log_file = File.open(scriptlog, "a")
    $logboth = Logger.new MultiDelegator.delegate(:write, :close).to(STDOUT, $log_file)
    $logfile = Logger.new MultiDelegator.delegate(:write, :close).to($log_file)
    $logconsole = Logger.new MultiDelegator.delegate(:write, :close).to(STDOUT)
    @outdb = 'logs/script_output_' + Time.now.strftime('%Y-%m-%d_%H-%M-%S') + '.db'

    @paths_filename = paths_filename
    @nmap_filename = nmap_filename
    @target_file = target_file
    @savedURLs_filename = savedURLs_filename
    @target_ips_range = target_ips_range
    @scan_port_range = scan_port_range
    @scan_all_ports = scan_all_ports
    @brute_force_mode = brute_force_mode.downcase
    @thread_count = number_of_threads
    @info = [["App Name", "URL to Application", "Potential Exploit", "Username", "Password"]]
    @scriptdb = SQLite3::Database.new @outdb
    @scriptdb.execute "CREATE TABLE IF NOT EXISTS VulnApps(AppName STRING, AppURL STRING, Exploit STRING, Username STRING, Password STRING)"
  end

  def run
    if @nmap_filename.empty? and @savedURLs_filename.nil?
      $logboth.info("Initiating port scan")
      nmap_scan
    end

    if @savedURLs_filename.nil?
      process_nmap_scan
    else
      process_savedgoodURLs_file
    end
  end

private

  def nmap_scan
    orig_std_out = $stdout.clone
    $stdout.reopen("/dev/null", "w")

    Nmap::Program.scan do |nmap|
      nmap.syn_scan = true
      nmap.service_scan = true
      nmap.xml
