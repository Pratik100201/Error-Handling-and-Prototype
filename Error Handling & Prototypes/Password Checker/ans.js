class user{
    #name;
    #pass;
    constructor(name,pass){
        this.#name=name
        this.#pass=pass
    }
    get name(){
        return this.#name
    }
    get pass(){
    
        if(this.#pass.length<8 || /\d/.test(this.#pass)==false || /[A-Z]/.test(this.#pass)==false ){
            console.log("Error : Password must be at least 8 characters long and contain one number and one uppercase letter ")
        }
         else{
            let a = "*"
            let b = []
            for(let i=0 ; i< this.#pass.length ; i++){
                b.push(a)
                
            }
            return b.join("")
    
        }
    }
    setpass(n){
       this.#pass = n
        if(this.#pass.length<8 || /\d/.test(this.#pass)==false || /[A-Z]/.test(this.#pass)==false ){
            console.log("Error : Password must be at least 8 characters long and contain one number and one uppercase letter ")
        }
         else{
            let a = "*"
            let b = []
            for(let i=0 ; i< this.#pass.length ; i++){
                b.push(a)
                
            }
            return b.join("")
    
        }
      
    }
    display(){
         
        if(this.#pass.length<8 || /\d/.test(this.#pass)==false || /[A-Z]/.test(this.#pass)==false ){
            console.log("Error : Password must be at least 8 characters long and contain one number and one uppercase letter ")
        }
        else{
            let a = "*"
            let b = []
            for(let i=0 ; i< this.#pass.length ; i++){
                b.push(a)
                
            }
            return b.join("")
    
        }
    }
}
let p = new user("ar", "efhdskc45A")

console.log(p.setpass("heksi2n"))
