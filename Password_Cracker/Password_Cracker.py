# Imports
import itertools
import time


# Brute force function
def tryPassword(passwordSet, stringTypeSet):
    start = time.time()
    chars = stringTypeSet
    attempts = 0
    for i in range(1, 9):
        for letter in itertools.product(chars, repeat=i):
            attempts += 1
            letter = "".join(letter)
            if letter == passwordSet:
                end = time.time()
                distance = end - start
                return (attempts, distance)


password = input("Password >")
# Allowed characters
stringType = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()_-+=[{]}|:;'\",<.>/?"
tries, timeAmount = tryPassword(password, stringType)
print(
    "Bindu Cracked the password %s in %s tries and %s seconds!"
    % (password, tries, timeAmount)
)
