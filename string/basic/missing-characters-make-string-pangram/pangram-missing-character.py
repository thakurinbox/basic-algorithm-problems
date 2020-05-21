def find_missing(s):
    alphabets = "abcdefghijklmnopqrstuvwxyz"
    letter_set = set(list(alphabets))
    s = s.lower()

    for char in s:
        letter_set.discard(char)
        if len(letter_set) == 0:
            return 'nothing missing'

    missting_list = list(letter_set)
    missting_list.sort()
    return ''.join(missting_list)


print(find_missing("welcome to geeksforgeeks"))

print(find_missing("The quick brown fox jumps"))

print(find_missing("The quick brown fox jumps over the lazy dog"))
