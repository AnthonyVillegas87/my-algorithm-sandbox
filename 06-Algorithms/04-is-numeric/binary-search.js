function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length -1;
    let middle = Math.floor((left + right) / 2);
    while(arr[middle] !== val && left <= right) {
       // console.log(left, right, middle)
        if(val < arr[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
        middle = Math.floor((left + right) / 2);
    }
    if(arr[middle] === val) {
        return middle
    }
    return -1
}

console.log(binarySearch([2, 5, 9, 6, 13, 15, 28, 30], 15))