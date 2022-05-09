import {BasicCalculate} from "../app";

describe("add function", () => {
    test("add calculate", () => {
        const number1 = 4;
        const number2 = 2;
        const result = 6;
        expect(BasicCalculate.add(number1, number2)).toBe(result)
    })
})

describe("substrack function", () => {
    test("substrack calculate", () => {
        const number1 = 4;
        const number2 = 2;
        const result = 2;
        expect(BasicCalculate.subtract(number1, number2)).toBe(result);
    })
})

describe("multiple function", () => {
    test("multiple calculate", () => {
        const number1 = 4;
        const number2 = 2;
        const result = 8;
        expect(BasicCalculate.multiple(number1, number2)).toBe(result);
    })
})

describe("division function", () => {
    test("division calculate", () => {
        const number1 = 4;
        const number2 = 2;
        const result = 2;
        expect(BasicCalculate.division(number1, number2)).toBe(result)
    })

})