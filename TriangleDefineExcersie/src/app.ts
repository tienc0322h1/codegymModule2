export class Triangle {
    public static checkTriangle(x: number, y: number, z: number): string {
        if (x * x + y * y === z * z || x * x + z * z === y * y || y * y + z * z === x * x) {
            return "is a Right Triangle";
        }
        if (x === y && y === z) {
            return "is a equal triangle";
        }

        if (x == y || x == z || y === z) {
            return "is a isosceles triangle"
        }
        if (x + y >= z) {
            return "is normal triangle"
        }
        if (x + y <= z) {
            return "is not a triangle";
        }
        if (x+z<=y) {
            return "is not a triangle";
        }
        if (x <= 0 || y <= 0 || z <= 0) {
            return "is not a triangle";
        }
        return "is not a triangle";

    }
}