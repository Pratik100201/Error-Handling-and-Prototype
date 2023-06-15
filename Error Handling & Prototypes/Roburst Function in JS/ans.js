function gets({name,age}){
    if(name== undefined || age==undefined){
    throw new Error('Invalid Input !')
    }
    else{
       console.log("Name : "+name)
       console.log("Age : "+age) 
    } 
}

console.log(gets({name:"Marry",age:31}))
console.log(gets({name:"Marrs",age:37}))
console.log(gets({name:"harry"}))

