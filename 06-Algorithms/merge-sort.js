
///Create a helper function to merge
function merge(arr1, arr2) {
    let result = [];
    // create two variables to start at the first index/element of each array
    let i = 0;
    let j = 0;
    //loop while there is still data to look at in both arrays
    while(i < arr1.length && j < arr2.length) {
        //if the element in arr2 is GREATER than the element in arr1,
        // then we push the smallest of the 2 to our result variable
        if(arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            //we then move i up by one
            i++
        } else {
            result.push(arr2[j]);
            //increment j by one
            j++
        }
    }

    // once we exhaust the first array.
    while(i < arr1.length) {
        result.push(arr1[i])
            i++;
    }

    while(j < arr2.length) {
        result.push(arr2[j]);
        j++
    }

    return result
}

//Take a single array and continue splitting it up into smaller arrays
//until the length of the array is 1 or 0
//This will require recursion
function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    //Divide the array into 2 halves
    let mid = Math.floor(arr.length / 2);
    //use slice to get the first few elements on the left to the middle
    //Recursion to continue to break the array into sub arrays
    let left = mergeSort(arr.slice(0, mid));
    //use slice to get the first few elements on the right to the end
    let right = mergeSort(arr.slice(mid));
    //merge left and the right
    return merge(left, right)
}


console.log(mergeSort([15, 3, 25, 20, 15, 76, 73]))