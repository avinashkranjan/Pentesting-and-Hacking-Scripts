# PureAES

The goal for this project is to implement the Advanced Encryption Standard (a special case of Rijndael Cipher) for
128/192/256 bit key sizes in Pure C. Why Pure C? Because it's fast, portable and fun! (Well, maybe not fun for everyone,
but definitely for me). I followed the specifications
from [FIPS 197](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf) ~~and used some test vectors
from [NIST](https://csrc.nist.gov/projects/cryptographic-algorithm-validation-program/block-ciphers#AES)~~. I also
followed through some Abstract Number Theory, Abstract Algebra for the intuition behind working in the Galois Field or
just Fields in general. The code is not optimized for speed or security, but rather for readability and simplicity. I
hope you find it useful (probably not) and feel free to give me feedback or suggestions.

# Setup

GCC and CMake with C99 all you need.

# Explanation/Working

The `aes.c` is well-documented and should be enough.

## To implement later

- Implement major block cipher mode of operations.
- Utilize the Intel's AES-NI (AES New Instructions) to efficiency and protection from side channel attacks. Either
  employing the instrinsics or inline-assembly provided in GCC (GNU C Compiler) for the x86_x64 arch instruction set.
