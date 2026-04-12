import { useState } from 'react';
function Counter() {
    //state
const [count,setCount]=useState(0)
//function to modify the state
const increment=()=> {
    setCount(count+1)
};
const decrement=() => {
    setCount(count-1)
};
return(
    <div className='text-center p-10 border'>
<h1
className='text-5xl'>Count:{count}
</h1>

    </div>
)

}