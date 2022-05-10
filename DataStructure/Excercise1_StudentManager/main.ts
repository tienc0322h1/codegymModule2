import {Student} from "./Student";
import {StudentManager} from "./StudentManager";
let studentManager = new StudentManager();
studentManager.insertFirst("A", 3);
studentManager.insertFirst("B", 4);
studentManager.insertFirst("C", 5);
studentManager.insertFirst("D", 7);
studentManager.insertLast("E", 8);
studentManager.insertLast("F", 8);
console.log(studentManager.showList());
console.log(studentManager.totalStudentFail());
console.log(studentManager.listStudentMaxScore());
console.log(studentManager.findByName(`A`))