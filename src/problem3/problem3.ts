export const isbnVerifier = (isbn: string) => {
  let numChecker: number = 0;

  for (let i = 0; i < isbn.length; i++) {
      if (isbn[i] == parseInt(isbn[i]).toString()) {
          numChecker++;
      }
  }

  if (numChecker == 10) {
      return true;
  }
  return false;
};