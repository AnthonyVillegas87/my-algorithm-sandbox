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
