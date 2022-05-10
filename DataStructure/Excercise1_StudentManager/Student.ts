export class Student{
    public _name: string;
    public _score: number;
    public _next: Student | null;
    constructor(name: string, srore: number) {
        this._name = name;
        this._score =  srore;
        this._next = null;
    }


    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getScore(): number {
        return this._score;
    }

    setScore(value: number) {
        this._score = value;
    }

    getNext(): Student | null {
        return this._next;
    }

    setNext(value: Student | null) {
        this._next = value;
    }
    readData() {
        return {
            name: this._name,
            score: this._score
        }
    }
}