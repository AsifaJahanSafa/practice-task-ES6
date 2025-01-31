const data=[{id:1,name:'Abul',address:'kochu khet'}];
console.log(data[0].address);

const product={
    count:5000,
    data:[
        {id:1,name:'lanovo laptop', price:65000},
        {id:2,name:'Mac book', price:165000},
    ]
}

console.log(product.data[1].price);


const user={
    id:5001,
    name:'Soriful Raj',
    address:{
        street:{
            fist:'54/1 uttora',
            second:'poribag er goli',
            third:'no dorai'
        },
        city:'Dhaka',
    }
}

console.log(user.address.street.second)


const user2={
    id:5002,
    name:'Pori bibir mazar',
    address:{
        city:'chitagong',
        country:'Bangladesh'
    }
}

console.log(user.address.street.second)
// ? mark hoche optional chain jodi thake tahole samne agabe nahole undefined hobe
console.log(user2.address.street?.second)