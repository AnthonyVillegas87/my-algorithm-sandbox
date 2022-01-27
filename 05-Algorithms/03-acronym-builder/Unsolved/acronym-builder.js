// Write code to create a function that accepts a string and returns an acronym for the given string

let acronymBuilder = function(str) {
    // Assign split str to var to separate each word in the sentence
    let word = str.split(' ');

    //iterate through array and find the first char of each word
 return word.reduce((prev, curr) => {

     return prev + curr.charAt().toUpperCase()

  }, "")

};
