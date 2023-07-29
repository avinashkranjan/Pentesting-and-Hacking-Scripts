#!/bin/python3

from itertools import permutations
import argparse


class IGen:
    leetSymbols = {
        "a": "@",
        "b": "8",
        "c": "©",
        "e": "3",
        "f": "7",
        "i": "1",
        "j": "9",
        "o": "0",
        "r": "®",
        "s": "$",
    }

    def __init__(self):
        super().__init__()
        self.parser = argparse.ArgumentParser()
        self.keywords = set()
        self.wordlist = set()
        self.setupArgs()
        self.getInfo()
        self.processInfo()
        self.makePermutations()
        self.storeToFile()

    def setupArgs(self):
        self.parser.add_argument(
            "-f", help="pick initials of keywords", action="store_true"
        )
        self.parser.add_argument(
            "-s", help="add special sybmols(like @, _, etc)", action="store_true"
        )
        self.parser.add_argument("-l", help="enable leet sybmols", action="store_true")
        self.parser.add_argument(
            "-t", help="add keywords with capital initials", action="store_true"
        )
        self.parser.add_argument(
            "-d", help="convert initials to digits", action="store_true"
        )
        self.parser.add_argument(
            "-cs",
            help="generate all lowercase and uppercase variant of list",
            action="store_true",
        )
        self.parser.add_argument(
            "-p",
            help="permutation count (Warning: This exponentially increases the list size,"
            "if you have many options enabled or more number of keywords, keep this number small."
            "A typical practical value would be 5-6). Default is 5.",
            default=5,
        )
        self.parser.add_argument(
            "-o", help="path to output file of wordlist.", default="wordlist.txt"
        )
        self.args = self.parser.parse_args()

    def getInfo(self):
        self.keywords.add(input("First Name: ").lower())
        self.keywords.add(input("Last Name: ").lower())
        bdate = input("Birthdate(dd): ")
        bmon = input("Birthday month(mm): ")
        byear = input("Birth Year(yyyy): ")
        if bdate:
            self.keywords.add(bdate)
            # Change dd format to d (03 to 3)
            self.keywords.add(str(int(bdate)))
        if bmon:
            self.keywords.add(bmon)
            # Change mm format to m (03 to 3)
            self.keywords.add(str(int(bmon)))
        if byear:
            self.keywords.add(byear)
            # Change yyyy to yy (2005 to 05 and 20)
            self.keywords.add(byear[2:])
            self.keywords.add(byear[0:2])

        while True:
            keyword = input(
                "Additional keyword(Nick name, Close friends, Personal hobby, Number, etc): "
            )
            if keyword:
                self.keywords.add(keyword.lower())
            else:
                break

    def processInfo(self):
        firstLetters = set()
        specialSymbols = set()
        leetWords = set()
        firstLetterUpper = set()
        letterToDigits = set()

        # Get first letters
        if self.args.f:
            for keyword in self.keywords:
                firstLetters.add(keyword[0])
                firstLetters.add(keyword[0].upper())

        # Add special symbols
        if self.args.s:
            specialSymbols = {"@", "_", "-", "$", "#", "!"}

        # Leet symbols
        if self.args.l:
            for keyword in self.keywords:
                for letter, leet in self.leetSymbols.items():
                    newKeyword = keyword.replace(letter, leet)
                    leetWords.add(newKeyword)

        # Make first letter capital
        if self.args.t:
            for keyword in self.keywords:
                firstLetterUpper.add(keyword.title())

        # Convert first letters to digits
        if self.args.d:
            for letter in firstLetters:
                if letter.isalpha() and letter.islower():
                    letterToDigits.add(str(ord(letter) - 96))

        self.keywords = (
            self.keywords.union(firstLetters)
            .union(specialSymbols)
            .union(leetWords)
            .union(firstLetterUpper)
            .union(letterToDigits)
        )

        print("Generated keywords: {}".format(self.keywords))
        print("Generating wordlist...........")

    def makePermutations(self):
        for permLength in range(1, int(self.args.p)):
            permutationList = list(permutations(self.keywords, permLength))
            for word in permutationList:
                self.wordlist.add("".join(token for token in word))

        if self.args.cs:
            words = self.wordlist.copy()
            for word in words:
                self.wordlist.add(word.lower())
                self.wordlist.add(word.upper())

    def storeToFile(self):
        with open(self.args.o, "w") as outfile:
            outfile.write("\n".join(self.wordlist))

        print("Wordlist Generated :)")


IGen()
