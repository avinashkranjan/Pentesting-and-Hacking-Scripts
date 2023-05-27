//
// Created by martian on 3/13/2023.
//
#ifndef AES_AES_H
#define AES_AES_H

#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define AES_N_r(N_k) \
    ((N_k == AES_128_N_k) ? AES_128_N_r : \
     (N_k == AES_192_N_k) ? AES_192_N_r : \
     (N_k == AES_256_N_k) ? AES_256_N_r : \
     0)

// Extracting [i][j]th element from a two dimensional array represented as a one-dimensional array
#define GET_ELEM(arr, i, j, n) (arr[n * i + j])

/*
 * Functions from aes.c
 */

extern const unsigned char N_w, N_r, N_b, N_block, N_k;

extern const uint16_t PP;


uint8_t gfadd(uint8_t x, uint8_t y);

uint8_t gfmul(uint8_t x, uint8_t y);

void KeyExpansion(const uint8_t key[], uint32_t expandedKey[]);

void EqKeyExpansion(const uint8_t key[], uint32_t dexpandedKey[]);

void CipherEncrypt(uint8_t stateArray[], const uint32_t roundKeys[]);

void InverseCipher(uint8_t stateArray[], const uint32_t roundKeys[]);

void EqInverseCipher(uint8_t stateArray[], const uint32_t droundKeys[]);

/*
 * Other helper functions
 */

int gentable(void);

void print_table(uint8_t arr[], uint8_t colSize, uint8_t rowSize, char *string);

void hexify(const char *hexStr, uint8_t *byteArr, size_t byteArrLen);

void xprintf(uint8_t *byteArr, size_t byteArrLen);

void transpose(uint8_t *in);

#endif //AES_AES_H
