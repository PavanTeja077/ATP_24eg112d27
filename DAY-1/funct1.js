//function which receives 3 nums and return the large number
let r= function bignum(a,b,c)
{
if(a>b&&a>c)
return a
else if(b>a&&b>c)
return b
else 
return c
}
let result=r(10,5,36)
console.log(result)