console.log('Counting Sort');

function countingSort(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sortedArr = [];

    // Creating an empty of of (max-min + 1) length and filling all the spots with zero.
    let countArr = new Array(max-min + 1).fill(0);

    //Count occurrences of each element
    for (let i= 0; i<arr.length; i++) {
        let num = arr[i];
        countArr[num-min] += 1;
    }

    //Modify countArr to store cumulative sum
    for (let i=1; i<countArr.length; i++) {
        countArr[i] += countArr[i-1];
    }

    //Build the sorted Array from countArr
    for(let i=arr.length-1; i>=0; i--) {
        let Idx = arr[i] - min;
        let sortIdx = countArr[Idx] - 1;
        sortedArr[sortIdx] = arr[i];
        countArr[Idx]--;
    }

    return sortedArr;

}

console.log(countingSort([5, 5, 1, 9, 2, 0, 0, 8]));