var Stack = /** @class */ (function () {
    function Stack() {
        this.storage = [];
    }
    Stack.prototype.push = function (item) {
        this.storage.push(item);
    };
    Stack.prototype.pop = function () {
        return this.storage.pop();
    };
    return Stack;
}());
var stack = new Stack();
var revertArrStack = [];
var inputArray = [1, 2, 3, 5, 8, 9];
for (var i = 0; i < inputArray.length; i++) {
    stack.storage.push(inputArray[i]);
}
console.log(stack.storage);
while (stack.storage.length) {
    var x = stack.pop();
    revertArrStack.push(x);
}
console.log(revertArrStack);
