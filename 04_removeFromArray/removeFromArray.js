const removeFromArray = function(array, ...args) {
    return array.filter(x => !args.includes(x));
/*for my understanding:
 return array.filter(function (x){
    return !args.includes(x);
 }
 )
this is separated by how I am used to reading, the actual answer has it condense to the arrow form.
 */
    
};

// Do not edit below this line
module.exports = removeFromArray;
