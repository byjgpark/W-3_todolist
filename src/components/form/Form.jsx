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
    <input
      onChange={(e) => {
        // Getting User title input
        setTitle(e.target.value);
      }}
    />
    <input
      onChange={(e) => {
        // Getting User Content input
        setContent(e.target.value);
      }}
    />
    <button
      onClick={() => {
        props.setTodos([
          // Appending user's post to todos hook
          ...props.todos,
          { id: props.todos.length + 1, title: title, body: body, isDone: false },
        ]);
      }}
    >
      저장
    </button>
  </div>
  );
}

export default Form;