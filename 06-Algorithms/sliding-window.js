/*
Given an arr and a number, write a function called maxSubArraySum, which finds the maximum sum of a subarray
with the length of the number passed to the function.
 */


function maxSubArraySum(arr, num) {
   let max = 0;
   let sum = 0;

   //edge case for arr length larger than given window total
    if(arr.length < num) return null
   //find initial sum of first num elements
    for(let i = 0; i < num; i++) {
        sum += arr[i]
    }

    //iterate through the array once & increment the right edge
    for(let j = num; j < arr.length; j++) {
       sum += arr[j] - arr[j - num];
       max = Math.max(max, sum)
       if(sum > max) {
           max = sum;
       }
    }
    return max;
}

console.log(maxSubArraySum([100, 200, 300, 400],2))     //700
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20] ,4)) //39
console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1],2)) //5
console.log(maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1],2)) //5
console.log(maxSubArraySum([2, 3],3)) //null

