import React from 'react'; 
import './style.css';
import Todo from '../todo/Todo.jsx'

function List(props){
  return(
    <Todo listProps={props}/>
      )
}

export default List;