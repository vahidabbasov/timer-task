import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [jokes, setJokes] = useState({})
  useEffect(()=>{
    axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode').then((res)=>{
      setJokes(res.data);
    })
  }, [])

  return (
    <div className="App">
     <button>Generate Joke</button>

    <div className='container'>
    <div className='card'>
    <div className='card-content-1'></div>
      <div className='card-content-2'></div>
    </div>
    </div>

    </div>
  );
}

export default App;
