//Radix Sort Helper functions

// return the digit in num at the given place value
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i )) % 10;
}

//returns the number of digits in the number
function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//given an array of numbers, return the number of digits on the largest numbers in the list
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums)
    for(let k = 0; k < maxDigitCount; k++) {
        let digitLists = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
           digitLists[digit].push(nums[i]);
        }
       nums = [].concat(...digitLists);
    }
    return nums;

}


console.log(radixSort([23, 345, 5467, 12, 2345, 8876, 9852, 100, 423, 15, 6, 1]))