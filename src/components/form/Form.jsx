import React from 'react'; 
import { useState } from "react";
import './style.css';

function Form(props) {

      // Title Hook
      const [title, setTitle] = useState("");
      // Content Hook
      const [body, setContent] = useState("");
  
  return (
    <div className="add-form">
      <div className="input-group">
    <label className="form-label">제목</label>
    <input className="add-input input-body" value={title}
      onChange={(e) => {
        // Getting User title input
        setTitle(e.target.value);
      }}
    />
    <label className="form-label">내용</label>
    <input className="add-input" value={body}
      onChange={(e) => {
        // Getting User Content input
        setContent(e.target.value);
      }}
    />
    </div>
    <button className="add-button"
      onClick={() => {
        props.setTodos([
          // Appending user's post to todos hook
          ...props.todos,
          { id: props.todos.length + 1, title: title, body: body, isDone: false },
        ])
      setTitle('')
      setContent('')
      }}
    >
      추가하기
    </button>
  </div>
  );
}

export default Form;