def pangrammatic_lipogram(s):
    alphabets = "abcdefghijklmnopqrstuvwxyz"
    letter_set = set(list(alphabets))
    s = s.lower()

    for char in s:
        letter_set.discard(char)
        if len(letter_set) == 0:
            return 'Pangram'

    if len(letter_set) == 1:
        return 'Pangrammatic Lipogram'

    return 'Not a Pangram but might a Lipogram'


print(pangrammatic_lipogram("welcome to geeksforgeeks"))

print(pangrammatic_lipogram("The quick brown fox jump over the lazy dog"))

print(pangrammatic_lipogram("The quick brown fox jumps over the lazy dog"))
