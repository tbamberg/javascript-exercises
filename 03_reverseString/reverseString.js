/* pseudocode
create "answer"
.split string into an array
.reverse array in place
.join array into string
return string
*/

const reverseString = function(string) {
    let answer = "";
    let array = [];

    array = string.split("");
    array = array.reverse();
    answer = array.join("");

    return answer;
};

// Do not edit below this line
module.exports = reverseString;
