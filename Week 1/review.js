//class
//product.js

class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
    render(parent) {
        const product = document.createElement('div');
        product.innerHTML = `
        <h2>${this.name}</h2>
        <p>${this.description}</p>
        <strong>${this.price.toFixed(2)}</strong>
        <button>Add to cart</button>
        <hr>`
        parent.appendChild(product);
    }
};

export default Product;