const numbers=[2,4,5,7,9];

const doubled=[];
for(const num of numbers){
 
    const double=num*2;
    console.log('num now',num ,'doube is',double);
    doubled.push(double);
    
}

// console.log(doubled)

// or
function doubleIt(number){
    console.log('number now',number)
    return number*2

}
const result=numbers.map(doubleIt);
console.log(result)

// or