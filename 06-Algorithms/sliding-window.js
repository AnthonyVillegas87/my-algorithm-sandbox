/*
Given an arr and a number, write a function called maxSubArraySum, which finds the maximum sum of a subarray
with the length of the number passed to the function.
 */


function maxSubArraySum(arr, num) {
   let max = 0;
   let sum = 0;

   //edge case for arr length larger than given window total
   // if(arr.length < num) return null
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

/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers
& a single positive integer

This function should return the minimal length of a contiguous subarray of which the sum is greater than or
equal to the integer passed to the function. If there isn't one, return 0 instead
 */
 //   ????????????????????

function minSubArrayLen(arr, num) {
    let i = 0; // start
    let j = 0; // end
    let sum = 0;
    let ret = Infinity;

    while(i < arr.length){
        if(sum < num && j < arr.length){
            // Our solution isn't in the current target, so add up the current
            // window and store it in the sum, and increment our window.
            sum += arr[j];
            j++
        } else if( sum >= num){
            // We have found our initial(and on going solution) in the current
            // block, so therefore add it to the `ret` variable in order to
            // keep track of the return value
            // j - i would be the different of indexes
            ret = Math.min(ret, j - i);

            // We found the solution in the current window, so decrement and
            // remove the index from the sum
            // try to find the target sum in a subsequent window
            sum -= arr[i];
            i++
        } else {
            break;
        }
    }

    // Infinitiy is the target because we'd need to compare the `positive` integer
    // that needs to be GREATER than what we'd sumup
    return ret === Infinity ? 0 : ret;

}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> because [4,3] is the smallest sub array
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 -> because [5,4] is the smallest sub array
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1 -> [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)) // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)) // 0


/*
Write a function called findLongestSubstring which accepts a string and returns the length of
the longest substring with all the distinct characters
 */

function findLongestSubstring(str)  {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1)
