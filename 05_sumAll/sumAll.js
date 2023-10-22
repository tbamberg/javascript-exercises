/* pseudocode
create variable sum = 0
check if args are positive integers
    if not, return "ERROR"
if min > max, swap min and max
for each int in set, add to sum
return sum
*/

const sumAll = function(min, max) {
    if (min < 0 || max < 0) return "ERROR";
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min > max) {
        let tempMin = min;
        min = max;
        max = tempMin;
    }

    let sum = 0;

    for (min; min <= max; min++) {
        sum += min;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
