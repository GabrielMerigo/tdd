const { sum, multiply } = require("../app");

it("should return 10 when it does the sum of 5 + 5", () => {
  const result = sum(5, 5);

  expect(result).toEqual(10);
});

it("should return 50 when multiplies 10 by 5", () => {
  const result = multiply(10, 5);

  expect(result).toEqual(50);
});
