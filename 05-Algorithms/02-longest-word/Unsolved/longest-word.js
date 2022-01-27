// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

let longestWord = function(str) {
    let arr = str.split(' ');

  const f =  arr.reduce((prev, curr) => {
      return prev.length > curr.length ? prev : curr
   },'')

    console.log(f)
    return f

};
