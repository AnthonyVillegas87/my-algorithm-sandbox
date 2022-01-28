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


//=========================  PURE RECURSION
function collectAllOdds(arr) {
    let result = [];

    //IF THE HELPER INPUT IS EMPTY, RETURN 0 AS BASE CASE
    if(arr.length === 0) {
        return result;
    }

    //CHECK IF THE FIRST ELEMENT IS ODD
    if(arr[0] % 2 !== 0) {
        //IF ODD, PUSH THE NUMBER INTO RESULT[]
        result.push(arr[0])
    }

    /*
    WITH EACH RECURSIVE CALL OUR RESULT ARRAY WILL RESET TO AN EMPTY ARRAY, HENCE AT THE END OF THE
    ARRAY PASSED INTO OUR FUNCTION, WE CONCAT EACH ARRAY CREATED WITH OUR ODD VALUES AND
    RETURN THEM COLLECTIVELY AS ONE
     */
    result = result.concat(collectAllOdds(arr.slice(1)));
    return result

}

//========= PRACTICE

/*
Write a function called power which accepts a base & an exponent. The function should return the power
of the base to the exponent. This function should mimic the functionality of Math.pow() - do
not worry about negative bases and exponents.
 */

function power(base, exponent) {
    if(exponent === 0) return 1

    return base * power(base, exponent - 1)
}
power(2, 2)