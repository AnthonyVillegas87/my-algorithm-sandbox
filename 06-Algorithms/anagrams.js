function validAnagram(str1, str2) {
    if(str1.length !== str2.length) return false

    let counterOne = {};
    let counterTwo = {};

    //iterate through the first str1
    for(let val in  str1) {
        counterOne[val] = (counterOne[val] || 0) + 1

    }

    //iterate through the second str2
    for(let val in str2) {
        counterTwo[val] = (counterTwo[val] || 0) + 1

    }

    //iterate through the first counter1 & compare to the second
    for(let key in counterOne) {
         if(!key in counterTwo) {
            return false
         }
        if(counterTwo[key] !== counterOne[key]) {
            return false
        }
    }

    return true


    // const lookup = {};
    //
    // for(let i = 0; i < str1.length; i++) {
    //     let letter = str1[i];
    //     //if letter exists, increment, otherwise set to 1
    //     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    // }
    //
    // for(let i = 0; i < str2.length; i++) {
    //     let letter = str2[i];
    //     if (!lookup[letter]) {
    //         return false
    //     } else {
    //         lookup[letter] -= 1
    //     }
    // }
    //
    // return true



}

/*
create a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency digits

SOLUTION MUST HAVE THE FOLLOWING COMPLEXITIES:   TIME: O(N)
 */
function sameFrequency(num1, num2) {

    let digits1 = num1.toString();
    let digits2 = num2.toString();
    //set edge case if either frequency is not the same length, return false
    if (digits1.length !== digits2.length) {
        return false;
    }



    let counterOne = {};
    let counterTwo = {};
   for(let i = 0; i < digits1.length; i++) {
       //if the number exists, increment , otherwise set up to 1
       counterOne[digits1[i]] = (counterOne[digits1[i]] || 0) + 1
   }

    //iterate through the second frequency of number
    for(let j = 0; j < digits2.length; j++) {
       counterTwo[digits2[j]] = (counterTwo[digits2[j]] || 0) + 1
    }

    for(let key in counterOne) {

        if(counterOne[key] !== counterTwo[key]) {
            return false;
        }
    }

    return true



}

// console.log(sameFrequency(181, 811));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(22, 222));

function areThereDuplicates(x, y, z) {
    let collection = {}
    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
        if(collection[key] > 1) return true
    }
    return false;

}


 console.log(areThereDuplicates(1, 2, 3))
 console.log(areThereDuplicates(1, 2, 2))
 console.log(areThereDuplicates('a', 'b', 'c', 'a'))
