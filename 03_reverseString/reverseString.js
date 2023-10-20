/* pseudocode
create "answer"
.split string into an array
.reverse array in place
.join array into answer
return answer
*/

const reverseString = function(string) {
    let array = [];

    array = string.split("");
    array = array.reverse();
    return array.join("");
};

// Do not edit below this line
module.exports = reverseString;
