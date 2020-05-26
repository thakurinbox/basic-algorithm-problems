const removePunctuations = s => {
  return s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");
};

console.log(removePunctuations("%welcome' to @geeksforgeek<s"));
console.log(removePunctuations("Hello!!!, he said ---and went."));
console.log(
  removePunctuations(
    "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"
  )
);
