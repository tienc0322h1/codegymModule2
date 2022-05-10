import {ArrayList} from "./ArrayList";
interface Post {
    title: string

}
let arrayList = new ArrayList<Post>();
arrayList.add({title: "Lap trinh js"});
arrayList.add({title: "Lap trinh java"});
arrayList.add({title: "Lap trinh php"});
console.log(arrayList.container);
