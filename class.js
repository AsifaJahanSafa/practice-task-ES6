const products=[
    {id:1, name:'lanove', price:65000},
    {id:3, name:'dell', price:45000},
    {id:4, name:'hp', price:40000},
    {id:5, name:'mac', price:145000},
]



class Product{

    country='Bangladesh'

    constructor(name,address){
        this.name=name,
        this.address=address
    }

    speak(talk){
        console.log(`I am ${talk} to him` )
    }
}


// const lenovo=new Product('Alur Dom','Alu khet');
// lenovo.speak('call and visiting ')
// console.log(lenovo)


class Teacher{
    constructor(name,subject){
        this.name=name,
        this.subject=subject
    }

    lecture(){
        console.log('Sir is  teaching us')
    }
}

const TapansSir=new Teacher('Tapan Pal','Physics');
console.log(TapansSir);

const Chemistry=new Teacher('Nag','Chemistry');
console.log(Chemistry)