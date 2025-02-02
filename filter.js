// filter kono condition pura korle tar array majhe dey nahole empty array dey
const height=[76,62,54,59,88,66,76,45];
const result=height.filter(p=>p>50);
console.log(result);

const result2=height.filter(h=>h<50);
console.log(result2);

const result3=height.filter(h=>h>100);
console.log(result3);


const selected=height.filter(p=>p%2===1);
console.log(selected)

const selected2=height.filter(p=>p%2===0);
console.log(selected2);

const friends=['tom','jerry','doremon','nobeta','shincha'];
const oddFriends=friends.filter(friend=>friend.length>4);
console.log(oddFriends);

