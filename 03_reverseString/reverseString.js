const reverseString = function(phrase) {
let phraseArray = phrase.split('');
let reversePhrase = (phraseArray.reverse()).join("");
return reversePhrase;
};

// Do not edit below this line
module.exports = reverseString;
