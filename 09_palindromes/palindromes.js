const palindromes = function (str) {
let nopunc = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
let onlyletters = nopunc.split(' ').join('')
let lettersarray= Array.from(onlyletters);
let reversearray = lettersarray.reverse();
if(reversearray.join('') === onlyletters){
    return true;
}
else
return false;
};

// Do not edit below this line
module.exports = palindromes;
