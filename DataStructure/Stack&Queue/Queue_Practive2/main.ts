import {Queue} from "./Queue";
let queue = new Queue<number>();
console.log(queue);
console.log(queue.size());
queue.enqueue(1);
queue.enqueue(2);
console.log(queue)
console.log(queue.size());
queue.enqueue(3);
queue.enqueue(4);
console.log(queue)
console.log(queue.size());
queue.dequeue();
console.log(queue)
console.log(queue.dequeue());


