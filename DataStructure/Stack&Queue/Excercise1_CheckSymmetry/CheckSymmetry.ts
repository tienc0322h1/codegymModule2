class Stack<ST> {
    storage: ST[] = [];

    constructor() {
    }

    push(item: ST): void {
        this.storage.push(item);
    }

    pop(): ST {
        return this.storage.pop();
    }
}

class Queue<Q> {
    contianer: Q[] = [];

    constructor() {
    }

    enqueue(item: Q): void {
        this.contianer.push(item);
    }

    dequeue(): Q {
        return this.contianer.shift();
    }
}

let stack = new Stack<string>();
let queue = new Queue<string>();
let texts = "abcbae";


for (let i = 0; i < texts.length; i++) {
    stack.push(texts[i]);
    queue.enqueue(texts[i]);
}

let flag = true;
while (stack.storage.length) {
    let x = stack.pop();
    let y = queue.dequeue();
    if (x !== y) {
        flag = false;
    }
}
if (flag) {
    console.log(`this texts is symmetry`);
} else {
    console.log(`this texts is not symmetry`);
}


