"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
function distance(CircleOne, CircleTwo, d) {
    var distance = Math.pow((CircleOne.radius - CircleTwo.radius), 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
var Cicle1 = new Circle_1["default"](9);
var Cicle2 = new Circle_1["default"](5);
console.log(distance(Cicle1, Cicle2, 24));
