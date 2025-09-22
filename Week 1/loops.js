const myArray = [1, 2, 3, 4, 5, 30, 27, 40];


function sumAllValues(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    console.log(sum);

};

sumAllValues(myArray);