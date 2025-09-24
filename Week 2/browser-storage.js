localStorage.setItem('testKey', JSON.stringify({ a: 1, b: 2 })); 
const data = JSON.parse(localStorage.getItem('testKey'));
console.log(data); // { a: 1, b: 2 }