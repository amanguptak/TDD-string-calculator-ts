import { add } from "../src/stringCalculator"


describe('String Calculator',()=>{
    it("returns 0 for empty string ",()=>{
        expect(add("")).toBe(0);
    })

    it("returns the number itself when one number is passed",()=>{
        expect(add("5")).toBe(5);
    })
})