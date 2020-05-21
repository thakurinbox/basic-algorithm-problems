const copyString = (string1, string2) => {
  if (!string1) {
    return string2;
  }

  string2 = string2 + string1[0];
  string1 = string1.slice(1);

  return copyString(string1, string2);
};

console.log(copyString("hello there how are you", ""));
