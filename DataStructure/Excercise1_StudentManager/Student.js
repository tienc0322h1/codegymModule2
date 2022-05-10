"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, srore) {
        this._name = name;
        this._score = srore;
        this._next = null;
    }
    Student.prototype.getName = function () {
        return this._name;
    };
    Student.prototype.setName = function (value) {
        this._name = value;
    };
    Student.prototype.getScore = function () {
        return this._score;
    };
    Student.prototype.setScore = function (value) {
        this._score = value;
    };
    Student.prototype.getNext = function () {
        return this._next;
    };
    Student.prototype.setNext = function (value) {
        this._next = value;
    };
    Student.prototype.readData = function () {
        return {
            name: this._name,
            score: this._score
        };
    };
    return Student;
}());
exports.Student = Student;
