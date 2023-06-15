let Products = [
    { name : "Pant" ,
    category : "clothing"} ,
    { name : "Bud" , 
    category : "elec"},
     { name : "Kurti" , 
    category : "clothing"},
     { name : "TV" , 
    category : "elec"},
     { name : "Shirt" , 
    category : "clothing"},
     { name : "Laptop" , 
    category : "elec"}
]
function div(arr){
    return function aas(n){
       let dd = arr.filter(bb=>{
          return  bb.category == n
        })
        console.log(dd)
    }
}
let cc = div(Products)("elec")

