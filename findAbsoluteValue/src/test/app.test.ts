import {FindAbsoluteValue} from "../app";
describe("find absolute of int number", () => {
    test("find absolute value", () => {
        const number1 = 2;
        const result = 2;
        expect(FindAbsoluteValue.findAbsolute(number1)).toBe(result)
    })
})