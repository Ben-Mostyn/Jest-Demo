
const app = require ("../app.js");


/////////////////Group Test

describe('should do num1 + num2', () =>{
    test('Should equal 5 when passed 2 and 3', () =>{
    
        expect(app.add(2,3)).toBe(5);
        
    })
test("should equal 100 when adding 50 and 50", ()=>{
    expect(app.add(50,50)).toBe(100)
})
    
})




////////////Array Test

test('Should contain dave', () =>{
    expect(app.array).toContain("dave");
});







//Null Test

test("Should add str 1 and str 2 together", () =>{
    expect(app.func1(2,3)).not.toBe(null);
});




/////////////////truthy and falsy

describe("if num1 = num 2 will be true, if not be false", () =>{
    test("should come back truthy", () =>{
        expect(app.truth(1,1)).toBeTruthy()
    })

    test("should come back false", () =>{
        expect(app.truth(1,2)).toBeFalsy()
    })
})



//////////// Object in Function


 