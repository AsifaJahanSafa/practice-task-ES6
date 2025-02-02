const numbers=[5,10,15,20,25,30];
const doubleIt=numbers.map(n=>n*2);
console.log(doubleIt);

const addedFive=numbers.map(n=>n+5);
console.log(addedFive);


const halvesNumbers=numbers.map(n=>n/2);
console.log(halvesNumbers);

// array proti element er sonkha jante
const friends=['tom','jerry','doremon','nobeta','shincha'];
const length=friends.map(friend=>friend.length);
console.log(length)


// array first letter
const firstletter=friends.map(friend=>friend[0]);
console.log(firstletter);

