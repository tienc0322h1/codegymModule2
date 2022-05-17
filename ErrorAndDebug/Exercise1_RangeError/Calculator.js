function calculator(number1, number2, operator) {
    var result;
    if (operator == "+") {
        result = number1 + number2;
    }
    if (operator == "-") {
        result = number1 - number2;
    }
    if (operator == "*") {
        result = number1 * number2;
    }
    if (operator == "/") {
        result = number1 / number2;
    }
    if (typeof number1 != "number" || typeof number2 != "number") {
        throw new TypeError("Number1/Number2 must be a number");
    }
    if (operator != "+" && operator != "-" && operator != "*" && operator != "/") {
        throw new RangeError("Operator must be \"+\", \"-\", \"*\", \"/\"");
    }
    return result;
}
try {
    calculator(3, 9, "%");
}
catch (error) {
    if (error instanceof RangeError) {
        console.log(error.message);
    }
    if (error instanceof TypeError) {
        console.log(error.message);
    }
}
