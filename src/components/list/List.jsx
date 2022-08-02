import React from 'react'; 
import Todo from '../todo/Todo.jsx'
import './style.css';

function List(props){
  return(
    <Todo listProps={props}/>
      )
}

export default List;