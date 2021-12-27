export const decryptAtbash = (cipherText: string) => {
  let decryption: Array<string> = [];
  const uppercaseAlphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < cipherText.split("").length; i++) {
    if (uppercaseAlphabet.includes(cipherText[i].toUpperCase())) {
      const order: number = uppercaseAlphabet.indexOf(cipherText[i].toUpperCase());
      if (uppercaseAlphabet[order] == cipherText[i]) {
        decryption.push(uppercaseAlphabet[(uppercaseAlphabet.length-1) - (order % 26)]); 
      } else {
        decryption.push(uppercaseAlphabet[(uppercaseAlphabet.length-1) - (order % 26)].toLowerCase());
      }
    }
  }

  return decryption.join("");
};