import Product from "./Product.js";

const productContainer = document.getElementById("product-container");

const product1 = new Product("Laptop", "High ", 999);
product1.render(productContainer);


const product2 = new Product("Laptop", "High ", 999);
product1.render(productContainer);


const product3 = new Product("Laptop", "High ", 999);
product1.render(productContainer)