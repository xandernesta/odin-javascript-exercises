const repeatString = function(word, times) {
  /*   let text = string;
    let amount = num;
    let result = text.repeat(amount);
    return result; */
    //was supposed to use loops so changed it below 
    if (times < 0) return 'ERROR';
    let string = '';
    for(let i =0;i < times; i++ ){
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
