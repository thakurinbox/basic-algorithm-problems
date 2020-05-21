import re

def is_pangram(s):
    # lets remove the numbers if any and change the string to lowercase
    letters = re.sub('/[^A-Za-z]+/g', '', s)
    letter_set = set()

    for char in letters:
        letter_set.add(char)
        if len(letter_set) == 26:
            return True
    return False

print(is_pangram("The quick brown fox jumps over the lazy dog"))
print(is_pangram("The quick brown fox jumps over the dog"))
