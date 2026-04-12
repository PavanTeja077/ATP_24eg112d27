//sum using rest parameter

const sum=(...numbers)=>{
    return numbers.reduce((sum,el)=>sum+el,0)
}
let r2=sum(10,20,30)
console.log(r2)

