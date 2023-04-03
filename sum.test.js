const { sum } = require("./sum");

test("Sum Test Case", () => {
    expect(sum(3,10)).toBe(13);
})

test("Second Test Case", () => {
    expect(sum(100,100)).toBe(200);
})

test("Third Test Case", () => {
    expect(sum(4,9)).not.toBe(15);
})