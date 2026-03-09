let r=function sumall(ar)
{
    let sum=0;
for(let i=0;i<ar.length;i++){
    sum+=ar[i]
}
return sum
}
let ar=[10,25,5]
let res=r(ar)
console.log(res)