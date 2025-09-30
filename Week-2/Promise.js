function promiseFunction() {
    return new Promise((resolve, reject) => {
        if (condition) {
            resolve('Success!');
        } else {
            reject('Failure!');
        }
    });

}

promiseFunction().then((variable) => {
    console.log(variable); // "Success!"
}).catch((error) => {
    console.error(error); // "Failure!"
}).finally(() => {
    console.log('Promise settled');
});


// Simulating an API call with a Promise
function fetchProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = [
                { id: 1, name: 'Laptop', price: 999.99 },
                { id: 2, name: 'Smartphone', price: 499.99 },
                { id: 3, name: 'Tablet', price: 299.99 }
            ];
            resolve(products);
        }, 2000);
    });
};

console.log('before fetch');
fetchProducts()
    .then(products => {
        console.log('Products fetched:', products);
        return products;
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });



// Using async/await
async function displayProducts() {
    try {
        const products = await fetchProducts();
        console.log('Products (async/await):', products);
    } catch (error) {
        console.error('Error (async/await):', error);
    }
}

displayProducts();

// Promise.all example
function fetchProductDetails(productId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: productId, details: `Details of product ${productId}` });
        }, 1000);
    });
}

async function fetchAllProductDetails() {
    const products = await fetchProducts();
    const detailPromises = products.map(p => fetchProductDetails(p.id));
    const details = await Promise.all(detailPromises);
    console.log('All product details:', details);
}
console.log('after fetch');
fetchAllProductDetails();



// Promise

//what is this doing here
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It allows you to attach callbacks for success (.then) and failure (.catch) without blocking the main thread.
// Promises help manage asynchronous code more cleanly than traditional callback functions, avoiding "callback hell" and improving readability.`

