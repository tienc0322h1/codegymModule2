export class Triangle {
    public static checkTriangle(x: number, y: number, z: number): string {
        if (x * x + y * y === z * z || x * x + z * z === y * y || y * y + z * z === x * x) {
            return "is a Right Triangle";
        } else if (x === y && y === z) {
            return "is a equal triangle";
        } else if (x == y || x == z || y === z) {
            return "is a isosceles triangle"
        } else if (x + y > z && x + z > y && y + z > x) {
            return "is normal triangle"
        } else if (x <= 0 || y <= 0 || z <= 0) {
            return "is not a triangle";
        } else return `is not a triangle`;

    }
}