def copy_string(string1, string2):
    if string1 == '':
        return string2

    string2 = string2 + string1[0]
    string1 = string1[1:]

    return copy_string(string1, string2)

print(copy_string('hello there whats up', ''))
