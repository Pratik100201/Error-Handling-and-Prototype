function ConvertToNumber(x){
     if(typeof(x)== "string"){
        let b = Number(x)
        if(isNaN(b)){
         return "Invalid number"
        }
        else{
            return b
            }
        }
    else{
        return x
    }    
}
     
ConvertToNumber("12kl")