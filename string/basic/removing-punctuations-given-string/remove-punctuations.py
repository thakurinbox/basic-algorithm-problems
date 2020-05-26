import string

def remove_punctuations(s):
    # TODO: need to complete it. as today is day for array's not strings
    # replace_punctuation = string.maketrans(string.punctuation, ' '*len(string.punctuation))
    # s = s.translate(replace_punctuation)
    text = s.strip(string.punctuation)
    return text

print(remove_punctuations("%welcome' to @geeksforgeek<s"));
print(remove_punctuations("Hello!!!, he said ---and went."));
print(
  remove_punctuations(
    "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"
  )
);
