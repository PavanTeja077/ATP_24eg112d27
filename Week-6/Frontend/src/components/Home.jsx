import {useContext} from 'react'
import { counterContextObj } from '../contexts/ContextProvider';
import { useCounterStore } from '../store/Counterstore';
function Home() {
  const {counter,changeCounter2,counter2,changeCounterDecrement} = useContext(counterContextObj);
  const {newCounter, incrementCounter, reset, changeCounter} = useCounterStore();

  return (
    <div>
      <h1 className='text-4xl'>Counter: {counter}</h1>
      <button onClick={changeCounter} className='bg-amber-300 p-5'>Increment</button>
      <button onClick={changeCounterDecrement } className='bg-red-500 p-5'>Decrement</button>
      <h1 className='text-4xl'>Counter 2: {counter2}</h1>
      <button onClick={changeCounter2} className='bg-green-500 p-5'>Increment Counter 2</button>
      <h1 className='text-4xl'>Counter {newCounter}</h1>
      <button onClick={incrementCounter} className='bg-blue-500 p-5'>Increment </button>
     <button onClick={changeCounter} className='bg-purple-500 p-5'>Change Counter</button>
      <button onClick={reset} className='bg-gray-500 p-5'>Reset Counter from Zustand</button>
    </div>
  )
}

export default Home