function validAnagram(str1, str2) {
    // let counterOne = {};
    // let counterTwo = {};
    //
    // //iterate through the first str1
    // for(let val in  str1) {
    //     counterOne[val] = (counterOne[val] || 0) + 1
    //
    // }
    //
    // //iterate through the second str2
    // for(let val in str2) {
    //     counterTwo[val] = (counterTwo[val] || 0) + 1
    //
    // }
    //
    // //iterate through the first counter1 & compare to the second
    // for(let key in counterOne) {
    //
    //     if(counterTwo[key] !== counterOne[key]) {
    //         return false
    //     }
    // }
    //
    // return true


    const lookup = {};

    for(let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        //if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }

    return true



}


console.log(validAnagram('', '') )   //true
console.log(validAnagram('aaz', 'zza')) //false
console.log(validAnagram('anagram', 'nagaram')) //true
console.log(validAnagram('rat', 'car')) //false
console.log(validAnagram('awesome', 'awesom') )//false
console.log(validAnagram('qwerty', 'qeywrt')) //true
console.log(validAnagram('texttwisttime', 'timetwisttext')) //true
