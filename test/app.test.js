const { it, expect } = require("@jest/globals");
const exp = require("constants");
const add = require ("app.js");
const { describe } = require("yargs");


describe("Should add two numbers together")
test('Should equal 5 when passed 2 and 3', () =>{
    expect(app.add(3,2)).toBe(5);
});


it("should include the name Dave", () =>{
    expect(app.myArray).toContain("Dave");
});