import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
 const handleChange = (op) =>{
    if(op=='-'){
      if(counter==0){
        return
      }else{
        setCounter(counter-1)
      }
    }else if(op=='+'){
      setCounter(counter+1)
    }
 }
  return (
    <div className="App">
      <h2 data-testid="counter-value">{counter}</h2>
      <button data-testid="counter-decrement-button" onClick={()=>{handleChange('-')}}>-</button>
      <button data-testid="counter-increment-button" onClick={()=>{handleChange('+')}}>+</button>
    </div>
  );
}

export default App;
