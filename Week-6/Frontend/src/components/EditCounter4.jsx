import React from 'react'
import { useContext } from 'react';
import { counterContextObj } from '../contexts/ContextProvider';

function EditCounter4() {
  const { counter, changeCounter, changeCounterDecrement } = useContext(counterContextObj);

  return (
    <div className='text-center mt-4 grid-cols-2 align-middle justify-center  '>
      <h1 className='text-4xl'>Counter: {counter}</h1>
      <button onClick={changeCounter} className='bg-amber-300 p-5 '>Increment</button>
      <button onClick={changeCounterDecrement} className='bg-red-500 p-5'>Decrement</button>

      <h1 className='text-4xl'>Counter: {counter}</h1>
      <button onClick={changeCounter} className='bg-amber-300 p-5'>Increment</button>
      <button onClick={changeCounterDecrement} className='bg-red-500 p-5'>Decrement</button>

      
      <h1 className='text-4xl'>Counter: {counter}</h1>
      <button onClick={changeCounter} className='bg-amber-300 p-5'>Increment</button>
      <button onClick={changeCounterDecrement} className='bg-red-500 p-5'>Decrement</button>

      
      <h1 className='text-4xl'>Counter: {counter}</h1>
      <button onClick={changeCounter} className='bg-amber-300 p-5'>Increment</button>
      <button onClick={changeCounterDecrement} className='bg-red-500 p-5'>Decrement</button>

    </div>
  )
}

export default EditCounter4