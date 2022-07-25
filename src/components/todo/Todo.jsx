import React from 'react'; 
import './style.css';


function Todo(props) {

  function completeBtn(p) {
   const varNum = props.listProps.todos.map((todo) => {

        if(todo.id === p){
            todo.isDone = true   
        }
        return todo 
        }
     )
     props.listProps.setTodos(varNum)
     console.log(varNum)
    }
   

  return (
    <div className="list-container"> 
        <h2 className="list-title">Working... 🔥</h2>
  {props.listProps.todos.map((todo) => {
      if (todo.isDone === false) {
        return (
          <div className="list-wrapper">
            <div className="todo-container">
              <div className="todo" key={todo.id}>
                <h2>{todo.title}</h2>
                <div>{todo.body}</div>
              </div>
              <div className="button-set">
                <button className="todo-delete-button button">삭제하기</button>
                <button className="todo-complete-button button" onClick={() =>{completeBtn(todo.id)}}>완료</button>
              </div>
            </div>
          </div>
        )
      }
    })}

  <h2 className="list-title">Done...!🎉</h2>
  {props.listProps.todos.map((todo) => {
      if (todo.isDone === true) {
        return (
          <div className="list-wrapper">
            <div className="todo-container">
              <div className="todo" key={todo.id}>
                <h2>{todo.title}</h2>
                <div>{todo.body}</div>
              </div>
              <div className="button-set">
                <button className="todo-delete-button button">삭제하기</button>
                <button className="todo-complete-button button">완료</button>
              </div>
            </div>
          </div>
        )
      }
    })
  }
</div>
  )
}

export default Todo;
