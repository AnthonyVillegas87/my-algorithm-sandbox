// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

let lookAndSay = function(n) {
    n = n + '*';
    let output = "";
    let count = 0;

    for(let i = 1; i < n.length; i++) {
        if(n.charAt(i) !== n.charAt(i - 1)) {
          output += (i - count) + n.substring(count, count + 1);
          count = i;
        }
    }

    console.log(output)
   return parseInt(output);
};


