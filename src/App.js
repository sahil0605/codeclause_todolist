
import React,  { useState } from 'react';
import './App.css';
import Todoinput from './components/Todoinput';
import List from './components/List';

function App() {
  const [todo ,setTodo]=useState([]);
  const addToList=(inputText)=>{
    if(inputText!==''){
    setTodo([...todo,inputText]);}
  }
  const deleteItem =(key)=>{
     let newList = [...todo];
     newList.splice(key,1);
     setTodo([...newList]);
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
           <Todoinput addToList={addToList}></Todoinput>
           <h1 className='app-heading'>Todo</h1>
           <br></br>
           {todo.map((listItem,i)=>{
            return(
              <List key={i}index={i} item ={listItem} deleteItem={deleteItem}></List>
            )
           })}
      </div>
    </div>
  );
}

export default App;
