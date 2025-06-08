import { add } from "../src/stringCalculator"


describe('String Calculator',()=>{
    it("returns 0 for empty string ",()=>{
        expect(add("")).toBe(0);
    })
})