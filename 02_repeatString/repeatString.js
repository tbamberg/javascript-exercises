const repeatString = function(string, num) {
    let answer = '';
    for (let i = 0; i < num; i++) {
        answer = answer.concat(string);
    }

    return answer;
};

// Do not edit below this line
module.exports = repeatString;
