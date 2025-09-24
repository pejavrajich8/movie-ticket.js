async function fetchProducts() {
    try {
       const response = await fetch('https://swapi.dev/api/people/1/');
       const products = await response.json();
       console.log('Products fetched:', products);
       return products;

    }
    catch (error) {
        console.error('Error fetching products:', error);
    }

}

fetchProducts();