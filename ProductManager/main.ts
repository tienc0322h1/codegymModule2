import {Product} from "./Product";
import {Productmanager} from "./Product";
let laptop = new Product("Laptop", 20000);
let iphone = new Product("iphone", 10000);

let productManager = new Productmanager();
productManager.add = laptop;
productManager.add = iphone;

console.log(productManager.getAll);
