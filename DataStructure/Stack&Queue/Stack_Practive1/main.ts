import {Stack} from "./Strack";

let strack = new Stack<number>();
console.log(strack)
strack.push(10);
console.log(strack);
console.log(strack.size())
strack.push(20);
strack.push(30);
strack.push(30);
console.log(strack);
console.log(strack.size())
strack.push(40);
console.log(strack)
console.log(strack.size())
strack.pop();
console.log(strack)
console.log(strack.size())



