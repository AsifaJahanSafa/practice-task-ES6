class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }

    activity(){
        this.sleep()
    }

}

const badam=new Person('Badam',50);
console.log(badam)
badam.sleep();
