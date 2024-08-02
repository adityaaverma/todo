import React,{useState} from 'react'
import '../App.css'

const TodoInput = (props) => {
    const [inputText, setInputText] = useState('');
    const handleEnterPress=(e)=>{
        if(e.keyCode ===13){
            props.addList(inputText);
            setInputText("");
        }
    }
    return (
    <div className='input-container'>
        <input type='text' 
        className='input-box-todo' 
        placeholder='enter your todo'
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value);
        }} 
        onKeyDown={handleEnterPress}
        />
        <button className='add-btn'
        onClick={()=>{
            props.aditya(inputText);
            setInputText("");
        }}>+</button>
    </div>
  )
}

export default TodoInput