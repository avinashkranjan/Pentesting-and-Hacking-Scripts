#!/bin/python3

import sys
import os


class Noogit:
    def __init__(self):
        super().__init__()
        self.args = sys.argv
        self.getCommand()

    def getCommand(self):
        while True:
            try:
                print("1. Initialize repository here")
                print("2. Get a repository")
                print("3. Check Status")
                print("4. Update branch")
                print("5. Add a remote")
                print("6. Remove a remote")
                print("7. Upstream a branch")
                print("8. Change to a new branch")
                print("9. Delete a branch")
                print("10. Upload changes to remote branch")
                print("0. Exit")

                command = input("\nSelect a command you want to perform: ")

                if command == "1":
                    self.runCommand("git init")
                elif command == "2":
                    self.handleGet()
                elif command == "3":
                    self.runCommand("git status")
                elif command == "4":
                    self.handleUpdate()
                elif command == "5":
                    self.handleRemoteAdd()
                elif command == "6":
                    self.handleRemoteDel()
                elif command == "7":
                    self.handleUpstreamAdd()
                elif command == "8":
                    self.handleNewBranch()
                elif command == "9":
                    self.handleBranchDel()
                elif command == "10":
                    self.handleBranchUpload()
                elif command == "0":
                    exit()
                else:
                    print("\nInvalid command number! Please select from the list.\n")
            except KeyboardInterrupt:
                print("\nProgram terminated by user!")
                exit()

    def handleGet(self):
        repository = input("Please enter git repo link: ")
        if repository:
            self.runCommand("git clone {}".format(repository))
        else:
            self.handleGet()

    def handleUpdate(self):
        remote = input("Enter the remote to update from(Leave blank for 'upstream'): ")
        branchFrom = input(
            "Enter the branch to get updates from(Leave blank to update from 'master'): "
        )
        branchTo = input(
            "Enter branch to update(Leave blank to update current branch): "
        )

        if not remote:
            remote = "upstream"
        if not branchFrom:
            branchFrom = "master"

        self.runCommand("git pull {} {}:{}".format(remote, branchFrom, branchTo))

    def handleRemoteAdd(self):
        remoteName = input("Enter remote name: ")
        remoteUrl = input("Enter remote url: ")
        if remoteUrl and remoteName:
            self.runCommand(
                "git remote add {} {}".format(remoteName, remoteUrl),
                additionOut="Remote added.",
            )
        else:
            print("Please enter both remote name and remote url!")
            self.handleRemoteAdd()

    def handleRemoteDel(self):
        remote = input("Enter remote to remove: ")
        if remote:
            self.runCommand(
                "git remote remove {}".format(remote), additionOut="Command Completed"
            )
        else:
            self.handleRemoteDel()

    def handleUpstreamAdd(self):
        remote = input(
            "Enter the remote to set upstream from(Leave black for 'upstream'): "
        )
        branchFrom = input(
            "Enter branch to set upstream changes from(Leave black for 'master'): "
        )
        branchTo = input(
            "Enter branch which has to be set upstream(Leave blank to use the upstream branch): "
        )

        if not remote:
            remote = "upstream"
        if not branchFrom:
            branchFrom = "master"
        if not branchTo:
            branchTo = branchTo

        self.runCommand("git branch -u {}/{} {}".format(remote, branchFrom, branchTo))

    def handleNewBranch(self):
        branch = input("Enter new name of branch: ")

        if branch:
            self.runCommand("git checkout -b {}".format(branch))
        else:
            self.handleNewBranch()

    def handleBranchDel(self):
        branch = input("Enter name of branch to delete: ")

        if branch:
            self.runCommand("git branch -d {}".format(branch))
        else:
            self.handleNewBranch()

    def handleBranchUpload(self):
        remote = input(
            "Enter remote name to upload changes to(Leave blank for origin): "
        )
        branchFrom = input(
            "Enter local branch from which the updates will be sent(Leave blank to use current branch): "
        )
        branchTo = input(
            "Enter remote branch name(Leave blank to use same name as local branch): "
        )

        if not branchTo:
            branchTo = branchFrom
        if not remote:
            remote = "origin"
        if branchFrom:
            self.runCommand("git push {} {}:{}".format(remote, branchFrom, branchTo))
        else:
            self.runCommand("git push {}".format(remote))

    def runCommand(self, cmd, additionOut=""):
        print("\n===========================================\n")
        os.system(cmd)
        if additionOut:
            print(additionOut)
        print("\n===========================================\n")


Noogit()
