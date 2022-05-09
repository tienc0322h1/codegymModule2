import {Triangle} from "../app";
describe("define triangle", () => {
    test("trianle check", () => {
        const sideA = 3;
        const sideB = 4;
        const sideC = 5;
        let result = "is a Right Triangle";
        expect(Triangle.checkTriangle(sideA, sideB, sideC)).toBe(result)
    })
    test("check Right Triangle with sideB is max", () => {
        const sideA = 3;
        const sideB = 5;
        const sideC = 4;
        let result = "is a Right Triangle";
        expect(Triangle.checkTriangle(sideA,sideB,sideC)).toBe(result);
    })
    test("check Right Triangle if sideA is max", () => {
        const sideA = 5;
        const sideB = 4;
        const sideC = 3;
        let result = "is a Right Triangle";
        expect(Triangle.checkTriangle(sideA,sideB,sideC)).toBe(result);
    })
    test("check a equal triangle", () => {
        const sideA = 3;
        const sideB = 3;
        const sideC = 3;
        let result = "is a equal triangle";
        expect(Triangle.checkTriangle(sideA, sideB, sideC)).toBe(result);
    })
    test("check isosceles triangle", () => {
        const sideA = 3;
        const sideB = 3;
        const sideC = 5;
        let result = "is a isosceles triangle"
    })
    test("check normal triangle with sideA is Min", () => {
        const sideA = 3;
        const sideB = 5;
        const sideC = 6;
        let result = "is normal triangle"
        expect(Triangle.checkTriangle(sideA,sideB,sideC)).toBe(result);

    })
    test("check normal triangle with sideB is Min", () => {
        const sideA = 5;
        const sideB = 3;
        const sideC = 6;
        let result = "is normal triangle";
        expect(Triangle.checkTriangle(sideA,sideB,sideC)).toBe(result);
    })
    test("check normal triangle with sideC is Min", () => {
        const sideA = 5;
        const sideB = 6;
        const sideC = 3;
        let result = "is normal triangle";
        expect(Triangle.checkTriangle(sideA,sideB,sideC)).toBe(result);
    })
    test("check Tringle with SideA is negative integer", () => {
        const sideA = -3;
        const sideB = 4;
        const sideC = 6;
        let result = "is not a triangle"
        expect(Triangle.checkTriangle(sideA,sideB,sideC)).toBe(result);
    })
    test("check triangle with SideA greater sideB+sideC", () => {
        const sideA = 9;
        const sideB = 4;
        const sideC = 3;
        let result = "is not a triangle";
        expect(Triangle.checkTriangle(sideA,sideB,sideC)).toBe(result);
    })
    test("check triangle with SideB greater sideA+sideC", () => {
        const sideA = 3;
        const sideB = 9;
        const sideC = 4;
        let result = "is not a triangle";
        expect(Triangle.checkTriangle(sideA,sideB,sideC)).toBe(result);
    })
    test("check triangle with SideC greater sideA+sideB", () => {
        const sideA = 3;
        const sideB = 4;
        const sideC = 9;
        let result = "is not a triangle";
        expect(Triangle.checkTriangle(sideA,sideB,sideC)).toBe(result);
    })
})