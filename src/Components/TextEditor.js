import React,{useState} from 'react'

function TextEditor() {
    const [text,setText] = useState('');
     const toUppercase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const toLowercase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const clearText=()=>{
        let newText='';
        setText(newText);
    }
   const handleonChange=(e)=>{
    setText(e.target.value);
   }
  return (
    <div className='main'>
         <h1>Text Editor</h1>
      <div id='text-Container'>
      
       <button id='UpperCase' className='Text-btn'onClick={toUppercase}>UpperCase</button>
       <button id='LowerCase' className='Text-btn' onClick={toLowercase}>LowerCase</button>
       <button id='reset' className='Text-btn' onClick={clearText}>Reset</button>
      </div>
      <div>
        <textarea name="textarea" id="texteditor" rows={8} value={text} onChange={handleonChange}> 
        
        </textarea>
      </div>
    </div>
  )
}

export default TextEditor
