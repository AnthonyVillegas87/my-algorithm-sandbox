// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

let titleCase = function(str) {
    //lower case the string
    str = str.toLowerCase();
    //split the string into an array of strings
    str = str.split(' ');
    //iterate through the array with a for loop
    for(let i = 0; i < str.length; i++) {
        //at the beginning of each stringIndex 0 is capitalized & the rest of the string is seperated after the 0 index
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    //strArr is then joined into one string
   return str.join(' ');

};
