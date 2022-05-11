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
var Queue = /** @class */ (function () {
    function Queue() {
        this.contianer = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.contianer.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.contianer.shift();
    };
    return Queue;
}());
var stack = new Stack();
var queue = new Queue();
var texts = "abcbae";
for (var i = 0; i < texts.length; i++) {
    stack.push(texts[i]);
    queue.enqueue(texts[i]);
}
var flag = true;
while (stack.storage.length) {
    var x = stack.pop();
    var y = queue.dequeue();
    if (x !== y) {
        flag = false;
    }
}
if (flag) {
    console.log("this texts is symmetry");
}
else {
    console.log("this texts is not symmetry");
}
