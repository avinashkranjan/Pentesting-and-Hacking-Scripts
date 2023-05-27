// aes.x : This file contains the 'main' function. Program execution begins and ends there.
//

#include "aes.h"
#include "constants.h"

// Macro for the cyclic shift in ShiftRows
#define shift(r, N_b) r

// Helper macro to get the array at (i, j) th column, since the state array is one-dimensional
#define getStateArr(arr, N_b, x, y) arr[x * N_b + y]

// Helper macro to get the substitution byte for x. For debugging.
#define getSBOX(x) Sbox[((x >> 4) & 0xf) * 0x10 + (x & 0xf)]

#define LITTLE_ENDIAN 1
#define BIG_ENDIAN 0

union {
	unsigned int a;
	char c[sizeof(unsigned int)];
} endian = {0x0001};

#define ENDIANNESS ((unsigned int)endian.c[0] == 0x01 ? LITTLE_ENDIAN : BIG_ENDIAN)

// 1 word = 4 bytes = 32 bits
const unsigned char N_w = 0x4;

// Block size in words (= 16 bytes = 128 bits), constant for all N_k sizes
const unsigned char N_block = 0x4;

// Number of columns in the state array
const unsigned char N_b = 0x4;

// Key size/length, belongs in {4, 6, 8} words = {16, 24, 32} bytes = {128, 192, 256} bits
/*
#ifndef N_k
#define N_k 8
#endif
*/
// Number of rounds, a function of N_k, belongs in {10, 12, 14}
//const unsigned char N_r = AES_N_r(N_k);

// Reduction Irreducible polynomial GF(2^8)
const uint16_t PP = 0x11b;

static const uint32_t Rcon[10] = {0x01000000, 0x02000000, 0x04000000, 0x08000000, 0x10000000, 0x20000000, 0x40000000,
								  0x80000000, 0x1b000000, 0x36000000};

static const uint8_t Sbox[256] =
		{0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82,
		 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26,
		 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96,
		 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0,
		 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb,
		 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f,
		 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff,
		 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73,
		 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32,
		 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d,
		 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6,
		 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e,
		 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e,
		 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f,
		 0xb0, 0x54, 0xbb, 0x16};

static const uint8_t invSbox[256] =
		{0x52, 0x09, 0x6A, 0xD5, 0x30, 0x36, 0xA5, 0x38, 0xBF, 0x40, 0xA3, 0x9E, 0x81, 0xF3, 0xD7, 0xFB,
		 0x7C, 0xE3, 0x39, 0x82, 0x9B, 0x2F, 0xFF, 0x87, 0x34, 0x8E, 0x43, 0x44, 0xC4, 0xDE, 0xE9, 0xCB,
		 0x54, 0x7B, 0x94, 0x32, 0xA6, 0xC2, 0x23, 0x3D, 0xEE, 0x4C, 0x95, 0x0B, 0x42, 0xFA, 0xC3, 0x4E,
		 0x08, 0x2E, 0xA1, 0x66, 0x28, 0xD9, 0x24, 0xB2, 0x76, 0x5B, 0xA2, 0x49, 0x6D, 0x8B, 0xD1, 0x25,
		 0x72, 0xF8, 0xF6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xD4, 0xA4, 0x5C, 0xCC, 0x5D, 0x65, 0xB6, 0x92,
		 0x6C, 0x70, 0x48, 0x50, 0xFD, 0xED, 0xB9, 0xDA, 0x5E, 0x15, 0x46, 0x57, 0xA7, 0x8D, 0x9D, 0x84,
		 0x90, 0xD8, 0xAB, 0x00, 0x8C, 0xBC, 0xD3, 0x0A, 0xF7, 0xE4, 0x58, 0x05, 0xB8, 0xB3, 0x45, 0x06,
		 0xD0, 0x2C, 0x1E, 0x8F, 0xCA, 0x3F, 0x0F, 0x02, 0xC1, 0xAF, 0xBD, 0x03, 0x01, 0x13, 0x8A, 0x6B,
		 0x3A, 0x91, 0x11, 0x41, 0x4F, 0x67, 0xDC, 0xEA, 0x97, 0xF2, 0xCF, 0xCE, 0xF0, 0xB4, 0xE6, 0x73,
		 0x96, 0xAC, 0x74, 0x22, 0xE7, 0xAD, 0x35, 0x85, 0xE2, 0xF9, 0x37, 0xE8, 0x1C, 0x75, 0xDF, 0x6E,
		 0x47, 0xF1, 0x1A, 0x71, 0x1D, 0x29, 0xC5, 0x89, 0x6F, 0xB7, 0x62, 0x0E, 0xAA, 0x18, 0xBE, 0x1B,
		 0xFC, 0x56, 0x3E, 0x4B, 0xC6, 0xD2, 0x79, 0x20, 0x9A, 0xDB, 0xC0, 0xFE, 0x78, 0xCD, 0x5A, 0xF4,
		 0x1F, 0xDD, 0xA8, 0x33, 0x88, 0x07, 0xC7, 0x31, 0xB1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xEC, 0x5F,
		 0x60, 0x51, 0x7F, 0xA9, 0x19, 0xB5, 0x4A, 0x0D, 0x2D, 0xE5, 0x7A, 0x9F, 0x93, 0xC9, 0x9C, 0xEF,
		 0xA0, 0xE0, 0x3B, 0x4D, 0xAE, 0x2A, 0xF5, 0xB0, 0xC8, 0xEB, 0xBB, 0x3C, 0x83, 0x53, 0x99, 0x61,
		 0x17, 0x2B, 0x04, 0x7E, 0xBA, 0x77, 0xD6, 0x26, 0xE1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0C, 0x7D};

/*
 * The addition of two elements in a finite field is achieved by adding the coefficients for the
 * corresponding powers in the polynomials for the two elements. The addition is performed with
 * the XOR operation (denoted by + ).
 * Alternatively, addition of finite field elements can be described as the modulo 2 addition of
 * corresponding bits in the byte. For two bytes {a7a6a5a4a3a2a1a0} and {b7b6b5b4b3b2b1b0}, the sum is
 * {c7c6c5c4c3c2c1c0}, where each ci = ai + bi (i.e., c7 = a7 + b7, c6 = a6 + b6, ...c0 = a0 + b0).
 * {01010111} + {10000011} = {11010100} (binary notation);
 * {57} + {83} = {d4} (hexadecimal notation)
 */

uint8_t gfadd(uint8_t byte1, uint8_t byte2) {
	return byte1 ^ byte2;
}

/*
 * 	Russian Peasant Multiplication
 * 	Based on the pseudo code explained in https://www.wikiwand.com/en/Finite_field_arithmetic#Rijndael's_(AES)_finite_field
 */

uint8_t gfmul(uint8_t x, uint8_t y) {
	uint8_t p = 0; // p is the product
	while (x != 0 && y != 0) {
		uint8_t carry = 0;
		if (y & 0x01) {
			p ^= x;
		}
		y >>= 1;
		if (x & 0x80) {
			carry = 1;
		}
		x <<= 1;
		if (carry) {
			x ^= PP;
		}
	}
	return p;
}

/*
 * 	Multiply the binary polynomial by x, which is equivalent to multiplication by 0x02 or 0b10.
 */

uint8_t xtime(uint8_t x) {
	return gfmul(x, 0x02);
}

/*
 * Addition of 'words' in GF(2^8), when the coefficients of the polynomial belong to GF(2^8) themselves.
 * Each word is a 32-bit integer, and the coefficients are the bytes of the word. Unlike the addition of
 * two bytes (gfmul() does this; binary polynomials in GF(2^8), the addition of two words is not simply the XOR of the corresponding bytes.
 * If a(x) = a^3 x^3 + a^2 x^2 + a^1 x^1 + a^0 x^0 and b(x) = b^3 x^3 + b^2 x^2 + b^1 x^1 + b^0 x^0, then
 * a(x) + b(x) = (a^3 + b^3) x^3 + (a^2 + b^2) x^2 + (a^1 + b^1) x^1 + (a^0 + b^0) x^0
 * Here, + is equivalent to XOR, and the coefficients of the polynomial are the bytes of the word.
 */

void gfadd_words(uint8_t *a, uint8_t *b, uint8_t *c) {

	/*
	c[0] = a[0] ^ b[0];
	c[1] = a[1] ^ b[1];
	c[2] = a[2] ^ b[2];
	c[3] = a[3] ^ b[3];
	*/

	// This is apparently equivalent to
	*(uint32_t *) c = *(uint32_t *) a ^ *(uint32_t *) b;
}

/*
 * Multiplication of 'words' in GF(2^8), when the coefficients of the polynomial belong to GF(2^8) themselves.
 * If a(x) = a^3 x^3 + a^2 x^2 + a^1 x^1 + a^0 x^0 and b(x) = b^3 x^3 + b^2 x^2 + b^1 x^1 + b^0 x^0, then
 * c(x) = a(x) * b(x) = c_6 x^6 + c_5 x^5 + c_4 x^4 + c_3 x^3 + c_2 x^2 + c_1 x^1 + c_0 x^0
 * where c_6 = a^3 b^3 + a^2 b^2 + a^1 b^1 + a^0 b^0
 * 		 c_5 = a^3 b^2 + a^2 b^1 + a^1 b^0
 * 				...
 * 		 c_0 = a^0 b^0
 * This product is reduced by applying mod (x^4 + 1)
 *
 * Insert matrix product representation here
 */

void gfmul_words(const uint8_t *a, uint8_t *b, uint8_t *c) {
	c[0] = gfmul(a[0], b[0]) ^ gfmul(a[3], b[1]) ^ gfmul(a[2], b[2]) ^ gfmul(a[1], b[3]);
	c[1] = gfmul(a[1], b[0]) ^ gfmul(a[0], b[1]) ^ gfmul(a[3], b[2]) ^ gfmul(a[2], b[3]);
	c[2] = gfmul(a[2], b[0]) ^ gfmul(a[1], b[1]) ^ gfmul(a[0], b[2]) ^ gfmul(a[3], b[3]);
	c[3] = gfmul(a[3], b[0]) ^ gfmul(a[2], b[1]) ^ gfmul(a[1], b[2]) ^ gfmul(a[0], b[3]);
}

/*
 * 
 */

static uint32_t RotWord(uint32_t word) {        // Cyclic left shift, this can be easily extended for n shifts
	return ((word << 0x8) & 0xffffffff) | ((word >> 0x18) & 0x000000ff);
}

/* The S-Box table is generated from the affine transformation of the multiplicative inverse of uint8_t b(x), b^{-1}(x),
 * in the field with 0x11b as the irreducible polynomial same as before.
 *
 * Using a lookup table as recommended by forums, since calculating at run-time is vulnerable to side-channel attacks like timing attacks.
 *
 * The lookup table is is composed of rows that are located by the most significant nibble and columns by least significant nibble.
 * For example, 0x3f, the row number is 0x3, and column is 0xf.
 *
 * The most significant nibble is extracted by: (x >> 4) & 0xf
 * And the least significant nibble by: (x) & 0xf
 */

static void SubBytes(uint8_t stateArray[]) {
	for (int i = 0; i < N_b * 4; i++) {
		uint8_t toSub = stateArray[i];
		stateArray[i] = Sbox[((toSub >> 4) & 0xf) * 0x10 +
							 (toSub & 0xf)]; // GET_ELEM(Sbox, (toSub>>4)&0xf, toSub&0xf, 0x10)
	}
}

static uint32_t SubWords(uint32_t word) {
	uint8_t subWord[4];
	uint8_t j;
	for (int i = 0; i < 4; i++) {
		uint8_t toSub = (word >> (i * 8)) & 0xff;
		// I had to smash my brain into gdb to figure out that + has higher precedence than & operator, also the endianness, fuck me
		// The left and right shift operations are independent of the byte order of the system, but *(uint32_t*) is not.
		subWord[ENDIANNESS ? i : 3 - i] = Sbox[((toSub >> 4) & 0xf) * 0x10 +
											   (toSub & 0xf)]; // GET_ELEM(Sbox, (toSub>>4)&0xf, toSub&0xf, 0x10)
	}
	return *(uint32_t *) subWord;
}

/* The last three rows of the state array are cyclically shifted by a factor r, which in this case is the row index.
 * The cyclic shift is performed in left order, i.e. the left bytes are wrapped around and moved to the end of array in order of removal or like a stack.
 * The transformation can be represented by s_{i, j} = s'_{i, (j + shift(i, N_b)) mod (N_b)}
 */

static void ShiftRows(uint8_t stateArray[]) {

	for (int i = 1; i <
					4; i++) {                    // Move through the last three rows, 0 < i < 4, since s_{i, j} = s'_{i, (j + shift(i, N_b)) mod (N_b)} at i = 0 has no effect. See definition for shift(r, N_b).

		uint8_t temp[N_b];                            // Temporary array to store current row

		for (int j = 0; j <
						N_b; j++) {                // Move across the columns in each row, 0 <= j < N_b, and fill the temp array
			temp[j] = getStateArr(stateArray, N_b, i, j);
		}

		for (int j = 0; j <
						N_b; j++) {                // Cyclically move through the temp array by an offset of i, i.e. row number and allocate to the stateArray's current row
			getStateArr(stateArray, N_b, i, j) = temp[(j + shift(i, N_b)) % N_b];
		}
	}
// Alternative way I wanted to write because it was easier
/*
	for (int i = 1; i < 4; i++) {
		// Arrays are not affected by endianness, thus they are stored as big-endian
		uint32_t row = (stateArray[4 * i] << 24) | (stateArray[4 * i + 1] << 16) | (stateArray[4 * i + 2] << 8) | stateArray[4 * i + 3];
		uint32_t rotatedRow = ((row << 0x8 * i) & 0xffffffff) | ((row >> (0x20 - (0x8 * i))) & 0xffffffff);
		stateArray[4 * i] = (rotatedRow >> 24) & 0xff;
		stateArray[4 * i + 1] = (rotatedRow >> 16) & 0xff;
		stateArray[4 * i + 2] = (rotatedRow >> 8) & 0xff;
		stateArray[4 * i + 3] = rotatedRow & 0xff;
	}
 */
}

/* Each column in the state array is treated as polynomial over GF(2^8) with the coefficients itself in GF(2^8), the coefficient are uint8_t (1 byte = 8 bit) each
 * thus the whole polynomial is 32 bits or uint32_t. This column array is multiplied by a fixed polynomial a(x) = {03}x^3 + {01}x^2 + {01}x + {02}, under modulo x^4 + 1.
 * This product is shown in gfmul_words.
 * Each column (32 bit word) is replaced by its transformation (the product array).
 */

static void MixColumns(uint8_t stateArray[]) {
	static const uint8_t a_x[] = {0x2, 0x1, 0x1, 0x3};
	// We are essentially doing three operations consecutively, first being extracting the column array or word, and then applying the transformation, and in the end storing it back in place
	for (int i = 0; i < N_b; i++) {                    // Iterating through columns
		uint8_t polyProd[4];
		uint8_t tempColumn[4];
		for (int j = 0; j < 4; j++) {                // Iterating through rows
			tempColumn[j] = getStateArr(stateArray, N_b, j, i);        // Storing the column array in a temp array
		}
		gfmul_words(a_x, tempColumn, polyProd);                // Product of the polynomial mod x^4 + 1
		for (int j = 0;
			 j < 4; j++) {                // Iterating through the product and substituting in the stateArray's column
			getStateArr(stateArray, N_b, j, i) = polyProd[j];
		}
	}
}

/*
 * Remove unnecessary loops, and steps
 */

static void AddRoundKey(uint8_t stateArray[], const uint32_t roundKeys[]) {
	for (int i = 0; i < N_b; i++) {                    // Iterating through columns
		//uint8_t addedKey[4];
		//uint8_t tempColumn[4];
		// Converting word to uint8_t bytes
		uint8_t roundkeyArray[4] = {(roundKeys[i] >> 24) & 0xff, (roundKeys[i] >> 16) & 0xff,
									(roundKeys[i] >> 8) & 0xff, (roundKeys[i]) & 0xff};
		for (int j = 0; j < 4; j++) {                // Iterating through rows
			uint8_t *elSt = &getStateArr(stateArray, N_b, j,
										 i);        // (j, i) because we are iterating through the column in the state array
			*elSt = *elSt ^ roundkeyArray[j];
		}
		/* Just in case
		gfadd_words(tempColumn, roundkeyArray, addedKey);                //
		for (int j = 0;
			 j < 4; j++) {                // Iterating through the _ and substituting in the stateArray's column
			getStateArr(stateArray, N_b, i, j) = addedKey[j];
		*/
	}
}

void KeyExpansion(const uint8_t key[], uint32_t expandedKey[]) {
	int i = 0;
	while (i < N_k) {
		// Converting 4 bytes from key into a word one at a time to form the initial round keys, works on rows not columns
		expandedKey[i] = (key[4 * i] << 24) | (key[4 * i + 1] << 16) | (key[4 * i + 2] << 8) | key[4 * i + 3];
		//expandedKey[i] = *(uint32_t *)&key[4 * i];
		i += 1;
	} // i = N_k
	while (i < N_b * (N_r + 1)) {
		uint32_t temp = expandedKey[i - 1];
		if (i % N_k == 0) {
			temp = SubWords(RotWord(temp)) ^ Rcon[i / N_k - 1];
		} else if ((N_k > 6) && (i % N_k == 4)) {
			temp = SubWords(temp);
		}
		expandedKey[i] = expandedKey[i - N_k] ^ temp;
		i += 1;
	}
}


void CipherEncrypt(uint8_t stateArray[], const uint32_t roundKeys[]) {
	uint32_t w[N_b];
	for (int i = 0; i < N_b; i++) {
		w[i] = roundKeys[i];
	}
//	printf("round[0].start = ");
//	print_table(stateArray, 4);

	AddRoundKey(stateArray, w);
//	printf("round[0].k_sch = ");
//	print_table(stateArray, 4);
	int i;
	for (i = 1; i < N_r; i++) {

//		printf("round[%d].start = ", i);
//		print_table(stateArray, 4);

		SubBytes(stateArray);
//		printf("round[%d].s_box = ", i);
//		print_table(stateArray, 4);

		ShiftRows(stateArray);
//		printf("round[%d].s_row = ", i);
//		print_table(stateArray, 4);

		MixColumns(stateArray);
//		printf("round[%d].s_col = ", i);
//		print_table(stateArray, 4);

		for (int j = i * N_b; j < (i + 1) * N_b; j++) {
			w[j - i * N_b] = roundKeys[j];
		}
		AddRoundKey(stateArray, w);
//		printf("round[%d].k_sch = ", i);
//		print_table(stateArray, 4);
	}
	for (int j = N_r * N_b; j < (N_r + 1) * N_b; j++) {
		w[j - N_r * N_b] = roundKeys[j];
	}
	SubBytes(stateArray);
//	printf("round[%d].s_box = ", i);
//	print_table(stateArray, 4);

	ShiftRows(stateArray);
//	printf("round[%d].s_row = ", i);
//	print_table(stateArray, 4);

	AddRoundKey(stateArray, w);
//	printf("round[%d].k_sch = ", i);
//	print_table(stateArray, 4);
}


static void InvShiftRows(uint8_t stateArray[]) {

	for (int i = 1; i <
					4; i++) {                    // Move through the last three rows, 0 < i < 4, since s_{i, j} = s'_{i, (j + shift(i, N_b)) mod (N_b)} at i = 0 has no effect. See definition for shift(r, N_b).

		uint8_t temp[N_b];                            // Temporary array to store current row

		for (int j = 0; j <
						N_b; j++) {                // Move across the columns in each row, 0 <= j < N_b, and fill the temp array
			temp[j] = getStateArr(stateArray, N_b, i, j);
		}

		for (int j = 0; j <
						N_b; j++) {                // Cyclically move through the temp array by an offset of (N_b - i), i.e. row number and allocate to the stateArray's current row
			getStateArr(stateArray, N_b, i, j) = temp[(j + (N_b - shift(i, N_b))) %
													  N_b]; // Had a hard time figuring this out, I am dumb
		}
	}
/*
	for (int i = 1; i < 4; i++) {
		// Arrays are not affected by endianness, thus they are stored as big-endian
		uint32_t row = (stateArray[4 * i] << 24) | (stateArray[4 * i + 1] << 16) | (stateArray[4 * i + 2] << 8) | stateArray[4 * i + 3];
		uint32_t rotatedRow = ((row >> 0x8 * i) & 0xffffffff) | ((row << (0x20 - (0x8 * i))) & 0xffffffff);
		stateArray[4 * i] = (rotatedRow >> 24) & 0xff;
		stateArray[4 * i + 1] = (rotatedRow >> 16) & 0xff;
		stateArray[4 * i + 2] = (rotatedRow >> 8) & 0xff;
		stateArray[4 * i + 3] = rotatedRow & 0xff;
	}
*/
}

static void InvSubBytes(uint8_t stateArray[]) {
	for (int i = 0; i < N_b * 4; i++) {
		uint8_t toSub = stateArray[i];
		stateArray[i] = invSbox[((toSub >> 4) & 0xf) * 0x10 +
								(toSub & 0xf)]; // GET_ELEM(Sbox, (toSub>>4)&0xf, toSub&0xf, 0x10)
	}
}

static void InvMixColumns(uint8_t stateArray[]) {
	static const uint8_t a_x_inv[] = {0x0e, 0x09, 0x0d, 0x0b};
	// We are essentially doing three operations consecutively, first being extracting the column array or word, and then applying the transformation, and in the end storing it back in place
	for (int i = 0; i < N_b; i++) {                    // Iterating through columns
		uint8_t polyProd[4];
		uint8_t tempColumn[4];
		for (int j = 0; j < 4; j++) {                // Iterating through rows
			tempColumn[j] = getStateArr(stateArray, N_b, j, i);        // Storing the column array in a temp array
		}
		gfmul_words(a_x_inv, tempColumn, polyProd);                // Product of the polynomial mod x^4 + 1
		for (int j = 0;
			 j < 4; j++) {                // Iterating through the product and substituting in the stateArray's column
			getStateArr(stateArray, N_b, j, i) = polyProd[j];
		}
	}
}

/*
 * Modified InvMixColumns() transformation that acts on round keys taken as words.
 */

static void EqInvMixColumns(uint32_t roundKeys[]) {
	static const uint8_t a_x_inv[] = {0x0e, 0x09, 0x0d, 0x0b};
	// We are essentially doing three operations consecutively, first being extracting the column array or word, and then applying the transformation, and in the end storing it back in place
	for (int i = 0; i < N_b; i++) {                    // Iterating through columns
		uint8_t polyProd[4];
		uint8_t roundKeyArray[4] = {(roundKeys[i] >> 24) & 0xff, (roundKeys[i] >> 16) & 0xff,
									(roundKeys[i] >> 8) & 0xff, (roundKeys[i]) & 0xff};
		// Could've just defined gfmul_words() to take uint32_t instead of uint8_t, but a lot of the code above depends on it
		gfmul_words(a_x_inv, roundKeyArray, polyProd);                // Product of the polynomial mod x^4 + 1
		// Stuffing it in back in the roundKeys array as a uint32_t (word)
		roundKeys[i] = ((polyProd[0] << 24) & 0xffffffff) | ((polyProd[1] << 16) & 0xffffffff) |
					   ((polyProd[2] << 8) & 0xffffffff) | polyProd[3] & 0xffffffff;
	}
}

/*
 * Similar to the regular KeyExpansion routine but every word in the expandedKey array except the first
 * and last N_b words is transformed by a modified InvMixColumns() transformation.
 */

void EqKeyExpansion(const uint8_t key[], uint32_t expandedKey[]) {
	int i = 0;
	while (i < N_k) {
		// Converting 4 bytes from key into a word one at a time to form the initial round keys, works on rows not columns
		expandedKey[i] = (key[4 * i] << 24) | (key[4 * i + 1] << 16) | (key[4 * i + 2] << 8) | key[4 * i + 3];
		//expandedKey[i] = *(uint32_t *)&key[4 * i];
		i += 1;
	} // i = N_k
	while (i < N_b * (N_r + 1)) {
		uint32_t temp = expandedKey[i - 1];
		if (i % N_k == 0) {
			temp = SubWords(RotWord(temp)) ^ Rcon[i / N_k - 1];
		} else if ((N_k > 6) && (i % N_k == 4)) {
			temp = SubWords(temp);
		}
		expandedKey[i] = expandedKey[i - N_k] ^ temp;
		i += 1;
	}
	uint32_t dw[4];
	// The transformation is applied here -->
	for (i = 1; i < N_r; i++) {
		for (int j = i * N_b; j < (i + 1) * N_b; j++) {
			dw[j - i * N_b] = expandedKey[j];
		}
		EqInvMixColumns(dw);
		for (int j = i * N_b; j < (i + 1) * N_b; j++) {
			expandedKey[j] = dw[j - i * N_b];
		}
	}
}

/*
 * The Inverse Cipher to retrieve the stateArray after EncryptCipher()
 */

void InverseCipher(uint8_t stateArray[], const uint32_t roundKeys[]) {
	uint32_t w[N_b];

	for (int i = N_r * N_b; i < (N_r + 1) * N_b; i++) {
		w[i - N_r * N_b] = roundKeys[i];
	}
	AddRoundKey(stateArray, w);
	print_table(stateArray, 4, 4, "round[0].k_sch = ");

	for (int i = N_r - 1; i > 0; i--) {

		InvShiftRows(stateArray);

		InvSubBytes(stateArray);

		for (int j = i * N_b; j < (i + 1) * N_b; j++) {
			w[j - i * N_b] = roundKeys[j];
		}
		AddRoundKey(stateArray, w);

		InvMixColumns(stateArray);
	}
	InvShiftRows(stateArray);
	InvSubBytes(stateArray);

	for (int i = 0; i < N_b; i++) {
		w[i] = roundKeys[i];
	}
	AddRoundKey(stateArray, w);
}

/*
 * Equivalent Inverse Cipher: To be used with EqKeyExpansion(), which applies InvMixColumns() to the roundKeys.
 */

void EqInverseCipher(uint8_t stateArray[], const uint32_t droundKeys[]) {
	uint32_t dw[N_b];

	for (int i = N_r * N_b; i < (N_r + 1) * N_b; i++) {
		dw[i - N_r * N_b] = droundKeys[i];
	}
	AddRoundKey(stateArray, dw);

	for (int i = N_r - 1; i > 0; i--) {
		InvSubBytes(stateArray);
		InvShiftRows(stateArray);
		InvMixColumns(stateArray);
		for (int j = i * N_b; j < (i + 1) * N_b; j++) {
			dw[j - i * N_b] = droundKeys[j];
		}
		AddRoundKey(stateArray, dw);
	}
	InvSubBytes(stateArray);
	InvShiftRows(stateArray);
	for (int i = 0; i < N_b; i++) {
		dw[i] = droundKeys[i];
	}
	AddRoundKey(stateArray, dw);
}

