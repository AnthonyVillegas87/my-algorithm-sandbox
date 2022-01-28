function countDown(num) {
    if (num <= 0) {
        console.log("All done!")
        return;
    }

console.log(num)
    num--;
    countDown(num)
}

function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num - 1)
}

function factorial(num) {
    if(num === 1) return 1

   return num * factorial(num - 1)
}


//COLLECT ODD VALUES
function collectOdds(arr) {
    let result = [];

    function helper(helperInput) {
        //IF THE HELPER INPUT IS EMPTY, RETURN 0 AS BASE CASE
        if(helperInput.length === 0) {
            return;
        }

        //CHECK IF THE FIRST ELEMENT IS ODD
        if(helperInput[0] % 2 !== 0) {
            //IF ODD, PUSH THE NUMBER INTO RESULT[]
            result.push(helperInput[0])
        }
        //CALL HELPER(), WE CALL SLICE() ON INPUT WHERE SLICE RETURN A NEW SHALLOW COPY FROM A GIVEN START INDEX(SHRINKING THE ARRAY)
        helper(helperInput.slice(1))
    }

    helper(arr)
    return result;

}

