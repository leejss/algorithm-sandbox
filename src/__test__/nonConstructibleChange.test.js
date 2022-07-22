const nonConstructibleChange = require("../nonConstructibleChange");

test("coins: [100]", () => {
  const input = [100];
  expect(nonConstructibleChange(input)).toBe(100);
});

test("coins: [1,2]", () => {
  const input = [1, 2];
  expect(nonConstructibleChange(input)).toBe(3);
});

test("coins: [1,4]", () => {
  const input = [1, 4];
  expect(nonConstructibleChange(input)).toBe(2);
});

test("coins: [1,2,5]", () => {
  const input = [1, 2, 5];
  expect(nonConstructibleChange(input)).toBe(4);
});

test("coins: [2,3,6]", () => {
  const input = [2, 3, 6];
  expect(nonConstructibleChange(input)).toBe(4);
});
