import React, { createContext, useState } from 'react'
import run from '../gemini';
export const datacontext = createContext()
function UserContext({ children }) {
    let [speaking, setSpeaking] = useState(false)
    let [response, setResonse] = useState(true)
    let [recognitionText, setRecognitionText] = useState("Recognizing...")
    function speak(text)
    {
        const synth = window.speechSynthesis;
        let text_speak=new SpeechSynthesisUtterance(text)
        text_speak.volume=1;
        text_speak.rate=1;
        text_speak.pitch=1;
        text_speak.lang="hi-IN";
        synth.speak(text_speak)
    }

    async function aiResponse(prompt) {
        let result = await run(prompt)
        // document.write(result)
        let newText= result.split("**")&&result.split("*")&&result.replace("google","Akshay")&&result.replace("GOOGLE","Akshay")&&result.replace("Google","Akshay")&&result.replace("गूगल","Akshay")
        setRecognitionText(newText)
        speak(newText)
        setResonse(false)
        setTimeout(() => {
            setSpeaking(false)
        }, 5000)
    }
    let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    let recognition = new speechRecognition()
    recognition.onresult = (e) => {
        let currentIndex = e.resultIndex
        let transcript = e.results[currentIndex][0].transcript
        // document.write(transcript);
        setRecognitionText(transcript)
        // aiResponse(transcript)
        takeCommand(transcript.toLowerCase())
    }
  function takeCommand(command)
  {
    if(command.includes("open")&& command.includes("youtube"))
    {
        window.open("https://www.youtube.com/")
        speak("Opening Youtube")
        setResonse(false)
        setRecognitionText("Opening Youtube")
        setTimeout(() => {
            setSpeaking(false)
        }, 5000)
    }
    else if(command.includes("open")&& command.includes("instagram"))
        {
            window.open("https://www.instagram.com/")
            speak("Opening instagram")
            setResonse(false)
            setRecognitionText("Opening instagram")
            setTimeout(() => {
                setSpeaking(false)
            }, 5000)
        }
    else if(command.includes("open")&& command.includes("google"))
        {
            window.open("https://www.google.com/")
            speak("Opening google")
            setResonse(false)
            setRecognitionText("Opening google")
            setTimeout(() => {
                setSpeaking(false)
            }, 5000)
        }
    else if(command.includes("open")&& command.includes("facebook"))
        {
            window.open("https://www.facebook.com/")
            speak("Opening facebook")
            setResonse(false)
            setRecognitionText("Opening facebook")
            setTimeout(() => {
                setSpeaking(false)
            }, 5000)
        }
    else if(command.includes("who you are") || command.includes("आप कोन हो"))
        {
            speak("Hey Hi, i am Sara trained by akshay")
            setResonse(false)
            setRecognitionText("Hey Hi,I'm Sara trained by Akshay")
            setTimeout(() => {
                setSpeaking(false)
            }, 5000)
        }
        
    else
    {
        aiResponse(command)
    }
  }
    let value = {
        recognition,
        speaking,
        setSpeaking,
        recognitionText,
        response
    }
    return (
        <div>
            <datacontext.Provider value={value} >
                {children}
            </datacontext.Provider>

        </div>
    )
}

export default UserContext