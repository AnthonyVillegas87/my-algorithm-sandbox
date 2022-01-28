function countUniqueValues(arr) {
  // return new Set(arr).size

    if (!arr.length) {
        return 0;
    }
    //
    // let pointer1 = 0;
    // let pointer2 = 1;
    // while (pointer2 < arr.length) {
    //     if (arr[pointer1] !== arr[pointer2]) {
    //         pointer1++;
    //         arr[pointer1] = arr[pointer2];
    //     }
    //     pointer2++;
    // }
    // return pointer1 + 1;

    //start i at 0 index
    let i = 0;
    //iterate through arr & start j @ index 1
    for(let j = 1; j < arr.length; j++) {
        //compare index[i] to index[j]
        if(arr[i] !== arr[j]) {
            //if i is not equal to j then i will continue
            i++;
            //then we set i to equal what is at j then move forward
            arr[i] = arr[j]
            console.log(i, j)
        }
    }

    return i + 1




}

console.log(countUniqueValues([1,1,1,1,1,2]))  //2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) //7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) //4


/*
write a function called avgPair. Give the sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals
the target average. There may be more than one pair that matches the average target
 */

function avgPair(arr, avg) {
    //edge case for empty array
    if(arr.length === 0) return false

    let j = 0;
    let i;

    while(j < arr.length && arr[j] < 0) {
        if( j / arr.length !== avg) {
            return false
        }
        j++
        i = j;
    }



    return true
}

console.log(avgPair([1, 2, 3], 2.5))  //true
console.log(avgPair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) //true
console.log(avgPair([-1, 0, 3, 4, 5, 6], 4.1)) //false
console.log(avgPair([], 4)) //false


/*
Write a function called isSubsequence which takes two strings and checks whether the characters in the first string form a subsequence
of the characters in the second string. In other words, the function should check whether the characters in the
first string appear somewhere in the second string, without changing their order
 */
//           ?????????

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;



}

console.log(isSubsequence('hello', 'hello world')) //true
console.log(isSubsequence('sing', 'sting')) //true
console.log(isSubsequence('abc', 'abracadabra')) //true
console.log(isSubsequence('abc', 'acb')) //false


