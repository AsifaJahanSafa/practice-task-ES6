const multiply=(a,b,c)=>a*b*c;
console.log(multiply(5,6,2))


// templete string
const temString=`
I am a web developer.
I love to code.
I love to eat biryani.`

console.log(temString)


// arrow function with default parameter
const add=(first,second=5)=>first+second;
console.log(add(4));

const friend=['Jhinuk'];

for(const cher of friend){
    if(cher%2===0){
        console.log('even')
    }else{
       
        const evenLength=[];
        evenLength.push(cher);
        console.log(evenLength)
    }
}
