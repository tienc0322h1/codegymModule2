"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var Product_2 = require("./Product");
var laptop = new Product_1.Product("Laptop", 20000);
var iphone = new Product_1.Product("iphone", 10000);
var productManager = new Product_2.Productmanager();
productManager.add = laptop;
productManager.add = iphone;
console.log(productManager.getAll);
