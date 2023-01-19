import './App.css';
import {Welcome} from './component/Welcome.js'
import { useState } from 'react';

function App() {
  const[name,setName] = useState("")
  const[data,setData] = useState(false)
  return (
    <div className='main-container'>
      <div className='name-container'>
      <label className='name'>Enter Your Name</label>
      <input className='input' placeholder='Your Name' type="string" onChange={(event)=>{setName(event.target.value)}}></input>
      <button className='button' onClick={()=>{setData(true)}}>Login</button>
      {
      data ? <Welcome name = {name}></Welcome> : null
      }
      </div>
      <div className='footer-container'>
      <h3 className='footer'>Assignment done by Abhijeet Sinha(12002174)</h3>
      </div>
    </div>
  );
}

export default App;
