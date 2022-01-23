// Write code to return the number of vowels in `str`

let vowelCount = function(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    let newString = str.toLowerCase().split("");
    newString.filter((str) => {
        count += vowels.includes(str)



    })

    return count

};
