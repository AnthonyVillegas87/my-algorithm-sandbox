// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

let reverse = function(str) {
    let array = str.split('');
    let result = [];

    for(let i = array.length - 1; i >= 0; i--) {
        result.push(array[i])
    }

    return result.join('');
};
