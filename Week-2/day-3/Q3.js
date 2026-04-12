
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//filter
let res=cart.filter(function(cart)
{
if(cart.inStock==true)
return cart
}
)
console.log(res)
let data=cart.map(cartobj=>cartobj.name+" "+cartobj.price*cartobj.quantity)
console.log(data)
let r2=cart.find(cartobj=>cartobj.name=="Mouse")
console.log(r2)
let r3=cart.findIndex(cartobj=>cartobj.name=="Keyboard")
console.log(r3)
const grandTotal = cart.reduce((sum, item) => 
  sum + (item.price * item.quantity), 0);
console.log("Grand Total:", grandTotal);
