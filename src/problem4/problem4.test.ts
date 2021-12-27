import { sayInEnglish } from "./problem4";

test("Test 1", () => {
  expect(sayInEnglish(14)).toEqual("fourteen");
});
test("Test 2", () => {
  expect(sayInEnglish(100)).toEqual("one hundred");
});
test("Test 3", () => {
  expect(sayInEnglish(120)).toEqual("one hundred and twenty");
});
test("Test 4", () => {
  expect(sayInEnglish(1002)).toEqual("one thousand and two");
});
test("Test 5", () => {
  expect(sayInEnglish(1323)).toEqual(
    "one thousand three hundred and twenty-three"
  );
});
