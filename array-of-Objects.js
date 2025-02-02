const products=[
    {id:1, name:'lanove', price:65000},
    {id:3, name:'dell', price:45000},
    {id:4, name:'hp', price:40000},
    {id:5, name:'mac', price:145000},
]

// Map
const names=products.map(product=>product.name);
console.log(names);


const prices=products.map(product=>product.price);
console.log(prices)

// forEach er kono return nai tai console.log kore dekte hoy
products.forEach(p=>console.log(p.id));

// filter
// 50k er upor price pete
const upto50=products.filter(p=>p.price>50000);
console.log(upto50);

// find
// 40k takar laptop pete
const cheap=products.find(ch=>ch.price<=40000);
console.log(cheap)

// reduce
const total=products.reduce((accumultator,current)=>accumultator+current.price,0);
console.log(total)
