const numbers=[4, 5, 2, 8, 10];
const doubled=[];
for(const num of numbers){
   
    const double=num*2;
    // console.log('num is',num,'double is',double);
    doubled.push(double)
}

// console.log(doubled)

// or
function doubleIt(n){
    return n*2
}
const result=numbers.map(doubleIt);
console.log(result)


// or

const result2=numbers.map(n=>n*2);
console.log(result2)


// or

const doulbeIt3=n=>n*2
const result3=numbers.map(doulbeIt3);
console.log(result3)