export class Queue<T> {
    container: T[] = [];
    constructor() {
    }
    enqueue(item: T) : void {
        this.container.push(item);
    }
    dequeue(): T {
    return this.container.shift();
    }
    size() : number {
        return this.container.length;
    }

}