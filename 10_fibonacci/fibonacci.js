const fibonacci = function(fibPlace) {
let fibArray = [];
if(fibPlace < 0){
    return "OOPS";
}
else{
for(let i = 0; i <= parseInt(fibPlace); i++){
    if(i===0){
        fibArray.push(0);
    }
    else if(i===1){
        fibArray.push(1);
    }
    else {
        fibNext = fibArray[i-1] + fibArray[i-2];
        fibArray.push(fibNext);
    }
}
return fibArray[fibArray.length - 1];
}
};


// Do not edit below this line
module.exports = fibonacci;
