const sumAll = function(x,y) {
    if (Number.isInteger(x) &&  Number.isInteger(y) ){
        if (x > 0 && y > 0){
            if (x < y){
                let i = y;
                let sum = i;
                while(i >= x){
                sum = sum + i-1;
                i--;
            }
            return sum;
            }
            else{
                let i = x;
                let sum = i;
                while(i >= y){
                    sum = sum + i-1;
                    i--;
                }
            return sum;
            }
        }
        else{
            return 'ERROR';
        }
    }
    else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
