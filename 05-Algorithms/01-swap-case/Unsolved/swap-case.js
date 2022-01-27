// Write code to create a function takes a string and returns the string with all of the letter cases swapped

let swapCase = function(str) {
    let arr = [];
    str.split("").forEach(  el => {

       if(el.toUpperCase() === el) {
           arr.push(el.toLowerCase());
       } else {
           arr.push(el.toUpperCase());
       }

    });
    return arr.join('');
};
