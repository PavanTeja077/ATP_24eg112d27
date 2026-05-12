import { createContext, useState } from 'react'
//create context Provider Object
export const counterContextObj = createContext();
function ContextProvider({ children }) {
//state
const [counter, setCounter] = useState(10);
const [counter2, setCounter2] = useState(20);
//function to change state 
const changeCounter = () => {
    setCounter(counter + 1);
   // setCounter(counter - 1);
};
const changeCounter2 = () => {
    setCounter2(counter2 + 1);
   // setCounter(counter - 1);
}
const changeCounterDecrement = () => {
    setCounter(counter-1)
}
return (
    <counterContextObj.Provider value={{ counter, changeCounter, changeCounter2, counter2, changeCounterDecrement }}>
       {children}
    </counterContextObj.Provider>
)
}

export default ContextProvider
