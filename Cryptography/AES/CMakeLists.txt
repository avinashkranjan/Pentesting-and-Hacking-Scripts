cmake_minimum_required(VERSION 3.24)
project(aes C)

set(CMAKE_C_STANDARD 11)

include_directories(aes)

add_executable(aes
        aes.c
        aes.h
        gen_table.h
        gen_tables.c
        sbox_table.c
        sbox_table.h
        encrypt.c constants.h)

