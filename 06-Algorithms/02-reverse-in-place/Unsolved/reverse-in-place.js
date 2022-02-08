// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

function swap(arr, i, j) {
    let element = arr[i];
    arr[i] = arr[j];
    arr[j] = element;
}


let reverseInPlace = function(arr) {
    let end = arr.length - 1;
    let start = 0;


    while (end - start >= 1) {
        swap(arr, start, end)
        start++;
        end--;
    }

    return arr
}