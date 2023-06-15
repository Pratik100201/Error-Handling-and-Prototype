class Car{
    constructor(car,model,year){
        this.car=car
        this.model=model
        this.year=year
        
    }
    getDescription(){
        console.log("This is a "+this.year +" "  +this.car +" " +this.model)
    }
}
let p = new Car("Kia" , "Carens" , 2022)
p.getDescription()