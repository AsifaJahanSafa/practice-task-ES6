class Vehicle{
    constructor(name,price){
        this.name=name;
        this.price=price
    }

    move(){
        console.log('gari cole na cole thake')
    }
}



class Bus extends Vehicle{
    // extend dia ager Vehicle thake name nibe r price nibe abr this.name r price neya lagbe na
    constructor(name,price,seat){
        // 
        super(name,price);
        this.seat=seat
    }

    contactor(name){
        console.log(`${name} is constractor in bus`)
    }
}


class Truck extends Vehicle{
    constructor(name,price,weight){
        super(name,price);
        this.weight=weight
    }

    manpower(number){
        console.log(`manpower in truck is ${number}  `)
    }
}


const Car=new Vehicle('Car','1000000');
console.log(Car);


const bus=new Bus('Hanif Travels','500000','200');
console.log(bus);


const truckCompany=new Truck('KASHEM AND CO.','500000','2');
console.log(truckCompany)