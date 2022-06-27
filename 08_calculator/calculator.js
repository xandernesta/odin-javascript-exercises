const add = function(x,y) {
	let ans = Number(x+y);
  return ans;
};

const subtract = function(x,y) {
	if (x >= y){
  let ans = Number(x-y);
  return ans;
  }
  else if (y >= x){
    let ans = Number(y-x);
    return ans;
  }
  else{
    return "Please provide two numbers";
  }
};

const sum = function(array) {
  let ans = 0;  
  for(var i =0; i < array.length; i++){
      ans = ans + array[i];
    }
    return ans;
};

const multiply = function(array) {
  let ans = 1;  
  for(var i =0; i < array.length; i++){
      ans = ans * array[i];
    }
    return ans;
};

const power = function(num,exp) {
	let ans = 0
  for(let i = exp; i > 1; i--){ 
    if(i === exp){
      ans = num * num;
    }
    else{
    ans = ans * num;
    }
  }
  return ans;
};

const factorial = function(fac) {
	let newArray = [];
  for(let i = fac; i > 0; i-- ){
    newArray.push(i);
  }
  return multiply(newArray);//used my previous multiply method here
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
