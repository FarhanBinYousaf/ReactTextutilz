import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const [myStyle, setMyStyle] = useState({
        color : 'black',
        backgroundColor: 'white'
    })
    const [btnText, setBtnText] = useState("Enable Dark Mode")
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Assistance is now speaking.","success");
    }
    const handleClear = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text is now cleared","danger");
    }
    const reveseText = ()=>{
        let arr = text.split("");
        let revSt = arr.reverse();
        let revesedString = revSt.join('');
        setText(revesedString);
        console.log(revesedString);
        props.showAlert("Text is not reversed order","success");
    }
    const handleCopy = ()=>{
        let text = document.getElementById("textForm");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","success");

    }
  
    return (
        <>
            <div>
                <h2 style={{color:props.mode ==='dark'?'white':'black'}}  className="mt-4">{props.heading}</h2>
                <div className="mb-3" >
                    <textarea className="form-control" style={{backgroundColor:props.mode === 'dark'?'#161616':'white',color:props.mode ==='dark'?'white':'black'}}  placeholder="Enter your text here....." value={text} onChange={handleOnChange} id="textForm" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-1">Listen the text</button>
                <button type="submit" className="btn btn-danger" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-info mx-1" onClick={reveseText}>Reverse Text</button>
                <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p> {text.split(" ").length} words and {text.length} characters </p>
                <p>{0.008*text.split(" ").length } minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>

    )
}
