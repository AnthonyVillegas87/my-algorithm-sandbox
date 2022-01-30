

function swap(arr, i, j) {
    let element = arr[i];
    arr[i] = arr[j];
    arr[j] = element;
}


function partition(arr, start= 0, end = arr.length - 1) {
    //pivot is the value
    let pivot = arr[start];
    //swapIndex is the start of the pivot
    let swapIndex = start;

    for(let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = partition(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr
}


console.log(quickSort([100, -3, 2, 4, 8, 2, 1, 5, 7, 6, 3]))