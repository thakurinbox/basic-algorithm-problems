const findMissing = s => {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let letterSet = new Set([...alphabets]);
  let string = s.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    letterSet.delete(string[i]);
    if (!letterSet.size) {
      return "nothing missting";
    }
  }
  return [...letterSet].join("");
};

console.log(findMissing("welcome to geeksforgeeks"));

console.log(findMissing("The quick brown fox jumps"));

console.log(findMissing("The quick brown fox jumps over the lazy dog"));
