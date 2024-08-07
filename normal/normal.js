function value (){
    let elements = [0,1,2,3,4,5,6,7];
    for(i=0;i<elements.length;i++){
        if(elements[i]<0){
            return true
        }
    }
    return false
}
let newvalue = value();
console.log(newvalue);