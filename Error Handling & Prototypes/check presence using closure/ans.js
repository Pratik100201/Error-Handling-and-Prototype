function numbercheck(arr){
    return function a(n){
     return   arr.includes(n)
    }
}
numbercheck([1,2,3])(1)