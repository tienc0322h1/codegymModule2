"use strict";
exports.__esModule = true;
exports.StudentManager = void 0;
var Student_1 = require("./Student");
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.head = null;
        this.tail = null;
    }
    StudentManager.prototype.insertFirst = function (name, score) {
        var student = new Student_1.Student(name, score);
        if (!this.head) {
            this.head = student;
            this.tail = student;
        }
        else {
            student._next = this.head;
            this.head = student;
        }
    };
    StudentManager.prototype.insertLast = function (name, score) {
        var student = new Student_1.Student(name, score);
        if (!this.tail) {
            this.head = student;
            this.tail = student;
        }
        else {
            this.tail._next = student;
            this.tail = student;
        }
    };
    StudentManager.prototype.showList = function () {
        var studentList = [];
        var temp = this.head;
        while (temp) {
            studentList.push(temp.readData());
            temp = temp._next;
        }
        return studentList;
    };
    StudentManager.prototype.totalStudentFail = function () {
        var studentListFail = [];
        var temp = this.head;
        while (temp) {
            if (temp._score <= 5) {
                studentListFail.push(temp.readData());
            }
            temp = temp._next;
        }
        return studentListFail;
    };
    StudentManager.prototype.listStudentMaxScore = function () {
        var studentMaxScroreList = [];
        var temp = this.head;
        var maxScore = temp._score;
        while (temp) {
            if (temp._score > maxScore) {
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
    };
    StudentManager.prototype.findByName = function (name) {
        var temp = this.head;
        var names = [];
        while (temp._next) {
            if (temp._name === name) {
                names.push(temp.readData());
            }
            temp = temp._next;
        }
        return names;
        // return names
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;
