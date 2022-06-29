const findTheOldest = function(personArr) {
let ageArr = personArr.map(
    (element)=>{
        if(!element.hasOwnProperty("yearOfDeath")){
                element.yearOfDeath= new Date().getFullYear();
        }
        let age = Number(element.yearOfDeath) - Number(element.yearOfBirth);
        return {...element, age: `${age}`};
    });

const oldest =  ageArr.reduce((prev,current) => (prev.age > current.age)? prev : current);
return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
