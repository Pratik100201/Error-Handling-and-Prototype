class Person{
    constructor(name ='Unknown',age='0'){
        this.name = name
        this.age = age
    }
    getDetails(){
        console.log("Name : "+this.name +" " +" Age : "+this.age)
    }
}
let person1 = new Person("Harvey" , 33)
person1.getDetails()
let person2 = new Person()
person2.getDetails()