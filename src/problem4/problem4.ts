export const sayInEnglish = (n: number) => {

  const oneDigit: Array<string> = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const firstTwoDigit: Array<string> = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const secondTwoDigit: Array<string> = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let pronounce: Array<string> = [];

  while (n > 0) {
    const digits: number = n.toString().length;

    if (digits >= 10 && digits < 13) {
      pronounce.push(sayInEnglish(Math.floor(n / 1000000000)), "billion");
      n = n - Math.floor(n / 1000000000) * 1000000000;
    } else if (digits >= 7 && digits < 10) {
      pronounce.push(sayInEnglish(Math.floor(n / 1000000)), "million");
      n = n - Math.floor(n / 1000000) * 1000000;
    } else if (digits >= 4 && digits < 7) {
      pronounce.push(sayInEnglish(Math.floor(n / 1000)), "thousand");
      n = n - Math.floor(n / 1000) * 1000;
    } else if (digits == 3) {
      pronounce.push(oneDigit[parseInt(n.toString()[0])], "hundred");
      n = n - parseInt(n.toString()[0])*100;
    } else if (digits == 2) {
      if (n.toString()[0] == "1") {
        pronounce.push(firstTwoDigit[parseInt(n.toString()[1])]);
        n = n - 10 - parseInt(n.toString()[1]);
      } else if (n.toString()[1] != "0") {
        const hyphen: string = (secondTwoDigit[parseInt(n.toString()[0])].concat("-".concat(oneDigit[parseInt(n.toString()[1])])));
        pronounce.push(hyphen);
        n = n - parseInt(n.toString()[0])*10 - parseInt(n.toString()[1])*1;
      } else {
        pronounce.push(secondTwoDigit[parseInt(n.toString()[0])]);
        n = n - parseInt(n.toString()[0])*10;
      }
    } else if (digits == 1) {
      pronounce.push(oneDigit[n]);
      n = n - n;
    }

    if (n.toString().length <= 2 && n != 0) {
      pronounce.push("and");
    }
  }
  return pronounce.join(" ").trim();
};