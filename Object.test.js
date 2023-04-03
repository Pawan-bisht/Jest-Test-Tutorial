/**
 * How to test the Object equality in Jest
 */
const objectReturn = require("./Object");

test("Object Test case", () => {
    expect(objectReturn()).toEqual({ name: "Pawan putra hanuman"});
})