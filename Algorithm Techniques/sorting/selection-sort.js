function sort(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}


function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let lowestVal = i;
        for(let j = i + 1; j < arr.length; j++) {
            if( arr[j] < arr[lowestVal]) {
                lowestVal = j;
            }
        }
        if(i !== lowestVal) {
            sort(arr, i, lowestVal)
        }

    }
    return arr
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));