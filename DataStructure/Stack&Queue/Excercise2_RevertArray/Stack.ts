class Stack<T> {
    storage: T[] = [];

    constructor() {
    }

    push(item: T): void {
        this.storage.push(item);
    }

    pop(): T {
        return this.storage.pop()
    }

}

let stack = new Stack();
let revertArrStack = [];
let inputArray = [1, 2, 3, 5, 8, 9];
for (let i = 0; i < inputArray.length; i++) {
    stack.storage.push(inputArray[i]);
}
console.log(stack.storage);
while (stack.storage.length) {
    let x = stack.pop();
    revertArrStack.push(x);

}
console.log(revertArrStack)