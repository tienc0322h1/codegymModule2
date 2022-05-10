import {Student} from "./Student";
export class StudentManager {
    head: Student | null;
    tail: Student | null;
    constructor() {
        this.head = null;
        this.tail= null;
    }
    insertFirst(name: string, score: number): void {
        let student = new Student(name, score);
        if (!this.head) {
            this.head = student;
            this.tail = student;
        }else {
            student._next = this.head;
            this.head = student;
        }
    }
    insertLast(name: string, score: number): void {
        let student = new Student(name, score);
        if(!this.tail) {
            this.head =  student;
            this.tail = student;
        }else {
            this.tail._next = student;
            this.tail = student;
        }
    }
    showList(){
        let studentList: any = [];
        let temp = this.head;
        while (temp) {
            studentList.push(temp.readData());
            temp = temp._next;
        }
        return studentList;
    }
    totalStudentFail() {
        let studentListFail: any = [];
        let temp = this.head;
        while (temp) {
            if (temp._score<=5) {
                studentListFail.push(temp.readData());
            }
            temp = temp._next;
        }
        return studentListFail;
    }
    listStudentMaxScore() {
        let studentMaxScroreList: any = [];
        let temp = this.head;
        let maxScore = temp._score;
        while (temp) {
            if (temp._score>maxScore) {
                maxScore = temp._score;
            }
            temp = temp._next;
        }
        temp = this.head;
        while (temp) {
            if (temp._score === maxScore) {
                studentMaxScroreList.push(temp.readData());
            }
            temp = temp._next;
        }
        return studentMaxScroreList;
    }
    findByName(name: string) {
        let temp = this.head;
         let names: any=[]
        while (temp._next) {
            if (temp._name === name) {
                names.push(temp.readData())
            }
            temp=temp._next
        }
        return names
        // return names
    }
}