#include "gen_table.h"

uint8_t gfaddTable[0xff * 0xff];
uint8_t gfmulTable[0xff * 0xff];

void print_table(uint8_t arr[], uint8_t colSize, uint8_t rowSize, char *string);

void write_table(uint8_t arr[], FILE *fstream_s);

/*
 * Generate addition and multiplication tables in GF(2^8)
 */
int gentable(void) {
	for (int i = 0; i < 0xff; i++) {
		for (int j = 0; j < 0xff; j++) {
			gfaddTable[0xff * (i) + j] = gfadd((uint8_t) i, (uint8_t) j);
		}
	}
	for (int i = 0; i < 0xff; i++) {
		for (int j = 0; j < 0xff; j++) {
			gfmulTable[0xff * (i) + j] = gfmul((uint8_t) i, (uint8_t) j);
		}
	}
	//print_table(gfaddTable);
	// File to write the table to.
	FILE *fstream = fopen("table.txt", "w");
	write_table(gfaddTable, fstream);
	fclose(fstream);
	return 0;
}

void write_table(uint8_t arr[], FILE *fstream_s) {
	for (int i = 0; i < 0xff; i++) {
		for (int j = 0; j < 0xff; j++) {
			fprintf(fstream_s, "%x, ", arr[0xff * i + j]);
		}
		fprintf(fstream_s, "\n");
	}
}

void print_table(uint8_t arr[], uint8_t colSize, uint8_t rowSize, char *string) {
	printf("%s\n", string);
	for (int i = 0; i < rowSize; i++) {
		for (int j = 0; j < colSize; j++) {
			printf("%x, ", arr[colSize * (i) + j]);
		}
		printf("\n");
	}
	printf("\n");
}