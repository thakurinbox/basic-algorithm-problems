const isPangram = s => {
  // lets remove the numbers if any and change the string to lowercase
  const letters = s.replace(/[^A-Za-z]+/g, "").toLowerCase();
  const letterSet = new Set();
  for (let i = 0; i < letters.length; i++) {
    letterSet.add(letters[i]);
    if (letterSet.size === 26) {
      return true;
      break;
    }
  }
  return false;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("The quick brown fox jumps over the dog"));
