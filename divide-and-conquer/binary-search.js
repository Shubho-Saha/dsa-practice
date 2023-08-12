// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

function search(arr, val) {
    let startIndex = 0;
    let endIndex = arr.length - 1;

    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    while (startIndex <= endIndex) {
        if (arr[middleIndex] < val) {
            
            startIndex = middleIndex + 1;
            console.log('startIndex:', startIndex , ' middleIndex:', middleIndex)
            middleIndex = Math.floor((startIndex + endIndex) / 2);

        } else if (arr[middleIndex] > val) {

            endIndex = middleIndex - 1;
            middleIndex = Math.floor((startIndex + endIndex) / 2);

        } else {
            return middleIndex;
        }
       
    }
    return -1;

}

console.log(search([1, 2, 4, 6, 7, 9, 11], 111));