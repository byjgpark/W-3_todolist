import React from 'react'; 
import './style.css';

function Todo(props) {

  // function that change to Done HTML
  function compFun(comTodoID) {
   // todos hook from Layout Com
   const todoObj = props.listProps.todos.map((todo) => {

        if(todo.id === comTodoID){
            todo.isDone = true   
        }
        return todo 
        }
     )

     // update
     props.listProps.setTodos(todoObj)
    }
  
  // function that change to Working HTML
  function cancelFun(conTodoID){
    const todoObj = props.listProps.todos.map((todo) => {

      if(todo.id === conTodoID){
          todo.isDone = false   
      }
      return todo 
      }
   )
   props.listProps.setTodos(todoObj)
  }
  // function that delete todo object
  function deleteBtn(delTodoID){
    const todoObj = props.listProps.todos.filter(todo => 
    todo.id !== delTodoID
    )
    props.listProps.setTodos(todoObj)
  }

  

  return (
    <div className="list-container"> 
        <h2 className="list-title">Working... 🔥</h2>
        <div className="list-wrapper">
  {/* if todo.isDone is false, it moves to the Working Section*/}
  {props.listProps.todos.map((todo) => {
      if (todo.isDone === false) {
        return (
         
            <div className="todo-container">
              <div className="todo" key={todo.id}>
                <h2>{todo.title}</h2>
                <div>{todo.body}</div>
              </div>
              <div className="button-set">
                <button className="todo-delete-button button" onClick={() => {deleteBtn(todo.id)}}>삭제하기</button>
                <button className="todo-complete-button button" onClick={() =>{compFun(todo.id)}}>완료</button>
              </div>
            </div>
        
        )
      }
    })}
    </div>

  <h2 className="list-title">Done...!🎉</h2>
  <div className="list-wrapper">
  {/* if todo.isDone is true, it moves to the Done Section*/}
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
                <button className="todo-delete-button button" onClick={()=> {deleteBtn(todo.id)}}>삭제하기</button>
                <button className="todo-complete-button button" onClick={() => {cancelFun(todo.id)}}>취소</button>
              </div>
            </div>
          </div>
        )
      }
    })
  }
  </div>
</div>
  )
}

export default Todo;
