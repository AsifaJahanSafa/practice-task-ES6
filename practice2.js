const a=56;
const numbers=[56,7,8];
const person={
    name:'Jalai vhi'
}

const mess=`Hi ,${person.name} has a:${a} access to ${numbers[2]} `
console.log(mess);


const squire=x=>x*x;
console.log(squire(4));

const addition=(a,b)=>a+b;
console.log(addition(5,3));


const {age,x,...restObject}={ x:2, y:5, z:6, name:'Ovijeet', age:45};
console.log(age);
console.log(restObject);


const [first,second, ...remaining]=['sompa','sopna','kamala','samila'];
console.log(remaining);