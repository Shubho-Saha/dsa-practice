function productOfArray(arr) {
    if (!arr.length) return 1;

    return arr[0] * productOfArray(arr.slice(1)); 
}

console.log(productOfArray([2, 4, 10]));
console.log(productOfArray([2, -4, 10]));
