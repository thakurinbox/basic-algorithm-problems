const pangrammaticLipogram = s => {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let letterSet = new Set([...alphabets]);
  let string = s.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    letterSet.delete(string[i]);
    if (!letterSet.size) {
      return "Pangram";
    }
  }

  return letterSet.size === 1
    ? "Pangrammatic Lipogram"
    : "Not a Pangram but might a Lipogram";
};

console.log(pangrammaticLipogram("welcome to geeksforgeeks"));

console.log(pangrammaticLipogram("The quick brown fox jump over the lazy dog"));

console.log(
  pangrammaticLipogram("The quick brown fox jumps over the lazy dog")
);
