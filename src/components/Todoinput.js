import React, { useState } from "react";

function Todoinput(props) {
  const [inputText, setInputText] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        value={inputText}
        className="input-box-todo"
        placeholder="Write your task"
        onKeyDown={e=>{
          if(e.key==='Enter'){
            props.addToList(inputText)
            setInputText('');
          }
        }}
        onChange={e=>{
            setInputText(e.target.value)
        }}
      ></input>
      <button className="add-btn"  onClick={()=>{
        props.addToList(inputText)
        setInputText('');
      }}>+</button>
      
    </div>
  );
}

export default Todoinput;
