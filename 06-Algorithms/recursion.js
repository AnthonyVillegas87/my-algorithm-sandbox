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



/*
Write a function factorial which accepts a number and returns the factorial of that number.
A factorial is the product of an integer and all the integers below it; e.g., factorial(4!) is
equal to 24 because 4 * 3 * 2 * 1 equals 24. factorial (0!) is always 1
 */

function factorialNum(num) {


    if(num === 0) return 1

    return num * factorialNum(num - 1)
}

/*
Write a function called productOfArray which takes in an array of numbers and returns the product
of them all.
 */

function productOfArray(arr) {
    let result = [];

    result = arr.reduce((prev, curr) => {
        if(arr.length === 0) return 1;
        return prev * curr
    })

    return result
}

/*
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed
to the function
 */

function recursiveRange(num) {
    if(num === 0) return 0

    return num + recursiveRange(num - 1)
}
/*
Write a recursive function called fib which accepts a number and return the nth number in the fibonacci
sequence. Recall that the fibonacci sequence of whole numbers 1, 1, 2, 3, 5, 8 ...which starts
with 1 abd 1, and every number thereafter is equal to the sum of the previous two numbers
 */

function fib(num) {
    if(num === 0) return 0;
    if(num === 1 || num === 2) return 1

    return fib(num - 1) + fib(num - 2)
}