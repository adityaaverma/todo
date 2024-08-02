import React, { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
const App = () => {
  const [listTodo,setListTodo] =useState([]);
  let addList=(inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
  }
  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo]);
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput aditya={addList}/>
        <h1 className='app-heading'>TODO</h1>
        <hr/>
        {listTodo.map((listitem,i)=>{
          return(
            <TodoList key={i} index={i} item={listitem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App