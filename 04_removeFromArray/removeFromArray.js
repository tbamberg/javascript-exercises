/* pseudocode
function takes an array and unknown number of additional arguments
for each argument after array
    .indexOf argument in array
    if found, .splice array and remove found arg
return spliced array
*/

const removeFromArray = function(givenArray, ...otherArguments) {
    for (arg of otherArguments) {
        let index = givenArray.indexOf(arg);
        givenArray.splice(index,1);
    }
    return givenArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
