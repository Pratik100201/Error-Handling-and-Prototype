class Employee{
    constructor(name,position,salary){
        this.name = name
        this.position = position
        this.salary=salary
    }
    getSalary(){
        console.log(this.salary)
    }
}
let emp1 = new Employee("Marcus","Lead",140000)
emp1.getSalary()