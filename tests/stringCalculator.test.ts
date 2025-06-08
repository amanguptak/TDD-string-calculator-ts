import { add } from "../src/stringCalculator"


describe('String Calculator',()=>{
    it("returns 0 for empty string ",()=>{
        expect(add("")).toBe(0);
    })

    it("returns the number itself when one number is passed",()=>{
        expect(add("5")).toBe(5);
    })

    it("sums two comma separated numbers",()=>{
        expect(add("1,2")).toBe(3)
    })
    it('sums any number of comma-separated numbers',()=>{
        expect(add("1,2,3,4")).toBe(10)
    })
})