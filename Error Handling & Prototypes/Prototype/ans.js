class names{
    constructor(n){
        this.name = n
    }
}
Object.prototype.printDetail = function(){
    console.log("Hello My Name is "+this.name)
}
let s1 = new names("Swarnim")
s1.printDetail()