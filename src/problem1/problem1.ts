export const acronym = (phrase: string) => {
  let abb: Array<string> = [];
  let words: Array<string> = phrase.split(" ");
  
  for (let i = 0; i < words.length; i++) {
    abb.push(words[i][0].toUpperCase());
  }

  return abb.join("");
};
