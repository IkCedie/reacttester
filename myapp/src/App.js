import './App.css';
import {useState} from 'react';

function App() {
  const [myresult, setResult] = useState("")
  const handleClick = (value)=>{
    setResult(myresult + value) 
    }
  const calculate = ()=>{
    try {
      setResult(String(eval(myresult)))
    } catch (error) {
      setResult("Error")
    }
  }
  
 
return (
    <div className="App">
      <header className="App-header">
      <h1 className='mydiv'>{myresult}</h1>
      <table>
        <tr>
          <button onClick={() => handleClick('7')}> 7 </button>
          <button onClick={() => handleClick('8')}> 8 </button>
          <button onClick={() => handleClick('9')}> 9 </button>
          <button onClick={() => setResult("")}> C </button>
        </tr>
        <tr>
          <button onClick={() => handleClick('4')}> 4 </button>
          <button onClick={() => handleClick('5')}> 5 </button>
          <button onClick={() => handleClick('6')}> 6 </button>
          <button onClick={() => handleClick('*')}> * </button>
        </tr>
        <tr>
          <button onClick={() => handleClick('1')}> 1 </button>
          <button onClick={() => handleClick('2')}> 2 </button>
          <button onClick={() => handleClick('3')}> 3 </button>
          <button onClick={() => handleClick('/')}> / </button>
        </tr>
        <tr>
          <button onClick={() => handleClick('+')}> + </button>
          <button onClick={() => handleClick('-')}> - </button>
          <button onClick={() => handleClick('0')}> 0 </button>
          <button onClick={calculate}> = </button>
        </tr>
      </table> 
      </header>
    </div>
  );
}

export default App;
