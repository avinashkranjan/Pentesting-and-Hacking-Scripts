// Created by martian on 3/29/2023.
//

#include "constants.h"
#include "aes.h"
#include <stdlib.h>
#include <stdio.h>

/*
 * hexStr: The hex string to pass.
 * byteArr: The unsigned char array of size strlen(hexStr)/2.
 * byteArrLen:
 */

const unsigned char N_k = 0x8;
const unsigned char N_r = AES_N_r(N_k);

void hexify(const char *hexStr, uint8_t *byteArr, size_t byteArrLen) {
	for (size_t i = 0; i < byteArrLen; i++) {
		char buf[5] = {hexStr[0], hexStr[1]};
		byteArr[i] = (uint8_t) strtol(buf, NULL, 16);
		hexStr += 2 * sizeof(char);
	}
}

void xprintf(uint8_t *byteArr, size_t byteArrLen) {
	transpose(byteArr);
	for (int i = 0; i < byteArrLen / N_b; i++) {
		for (int j = 0; j < byteArrLen / N_b; j++) {
			printf("%02x", byteArr[i * N_b + j]);
		}
	}
}

void transpose(uint8_t *in) {
	for (int i = 0; i < 4; i++) {
		for (int j = i + 1; j < 4; j++) {            // in-place transpose, i < j < 4, out-of-place transpose 0 <= j < 4
			uint8_t temp = in[i * N_b + j];
			in[i * N_b + j] = in[j * N_b + i];
			in[j * N_b + i] = temp;
			//stateArr[j * N_b + i] = in[i * N_b + j];
		}
	}
}


int main(int argc, char **argv) {
/*
	uint8_t in[] = {
			0x32, 0x43, 0xf6, 0xa8,
			0x88, 0x5a, 0x30, 0x8d,
			0x31, 0x31, 0x98, 0xa2,
			0xe0, 0x37, 0x07, 0x34};

	uint8_t key[] = {
			0x2b, 0x7e, 0x15, 0x16,
			0x28, 0xae, 0xd2, 0xa6,
			0xab, 0xf7, 0x15,0x88,
			0x09, 0xcf, 0x4f, 0x3c};

 */


	char hexstring[] = "00112233445566778899aabbccddeeff";
	char keystring[] = "000102030405060708090a0b0c0d0e0f";

	/*
	 * Initialization of state array
	 */
	uint8_t stateArr[16];
	hexify(hexstring, stateArr, (size_t) 16);
	transpose(stateArr);
	print_table(stateArr, 4, 4, "state:");

	/*
	 * Initialization of key
	 */
	uint8_t key[strlen(keystring) / 2];
	hexify(keystring, key, strlen(keystring) / 2);
	print_table(key, 4, strlen(keystring) / 8, "key:");

	/*
	 * Key Expansion routine
	 */
	uint32_t expandedKey[N_b * (N_r + 1)];
	KeyExpansion(key, expandedKey);

	/*
	 * Encryption
	 */
	CipherEncrypt(stateArr, expandedKey);
	print_table(stateArr, 4, 4, "EncryptCipher:");

	/*
	 * Key expansion routine for decryption in case of EqInverseCipher
	 */
	uint32_t dexpandedKey[N_b * (N_r + 1)];
	EqKeyExpansion(key, dexpandedKey);

	/*
	 * Decryption
	 */
	EqInverseCipher(stateArr, dexpandedKey);
	print_table(stateArr, 4, 4, "EqInverseCipher:");

	/*	 Print the round keys
	int i = 0;
	while (i < N_b * (N_r + 1)) {
		printf("i: %d [0x%x], ", i, expandedKey[i]);
		i += 1;
	}
	*/
//	printf("round[10].output = ");

	xprintf(stateArr, 16);
	//printf("%x\n", gfmul(0x57, 0x83));
	//printf("%x", xtime(xtime(0x57)));
	return 0;
}