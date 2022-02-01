// Write code to return the largest number in the given array

let maxNum = function(arr) {
    console.log(arr)
    let num = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i + 1]) {
            num = arr[i]
        }
    }
    return(num);
};
