function sort(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}


function bubbleSort(arr) {
    //if array is partially sorted, create a case to break out of loop to prevent any unnecessary looping
    let noSort;

    for(let i = arr.length; i > 0; i--) {
        noSort = true
        for (let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                sort(arr, j, j + 1);
                noSort = false;
            }
        }
        if(noSort) break;
    }
    return arr;
}


console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]));