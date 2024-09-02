function outerFunction(outerNum){
let outerVar = 5;
 return   function innerFunc(){
      return  outerVar+outerNum
    }
}

let result = outerFunction(5)
console.log(result());