import Circle from "./Circle";
import circle from "./Circle";
function distance(CircleOne: Circle, CircleTwo: Circle, d: number) {
    let distance = Math.pow((CircleOne.radius-CircleTwo.radius), 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
let Cicle1 = new circle(9);
let Cicle2 = new circle(5);
console.log(distance(Cicle1, Cicle2, 24));
