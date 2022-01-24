// Write code to create a function that returns the factorial of `num`

let factorial = function(num) {
    if (num === 0) return 1
    return num * factorial(num - 1)
};
