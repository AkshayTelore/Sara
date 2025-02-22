import React, { useContext } from 'react'
import "./App.css"
import speakimg from "./assets/speak.gif"
import ai from "./assets/aiVoice.gif"
import { CiMicrophoneOn } from "react-icons/ci";
import va from "./assets/ai.png"
// import va from "./assets/bg.jpg"
import { datacontext } from './context/UserContext';
// import Nav from './Nav';
function App() {
  let { recognition, speaking, setSpeaking,recognitionText, response} = useContext(datacontext)
  return (
    // <div className='container'><Nav/>
    <div className='main'>
      
      <img src={va} alt='not found' id='cyrus' />
      <span>I'm Sara,Your Advance Virtual Assistant!</span>
      {!speaking ? <button onClick={() => {
        setSpeaking(true)
        recognition.start()
      }}>Click Me!<CiMicrophoneOn /></button>:
      <div className='response'>
        {response?<img src={speakimg} id='speak' alt="loading result..."/>
        :
        <img src={ai} alt="Not Laoding..." id='aiimg' />
        }
        <p>{recognitionText}</p>
      </div>
      
      }

    </div>
  )
}

export default App