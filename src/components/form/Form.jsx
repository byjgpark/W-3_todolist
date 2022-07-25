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
        setTitle(e.target.value);
      }}
    />
    <input
      onChange={(e) => {
        setContent(e.target.value);
      }}
    />
    <button
      onClick={() => {
        props.setTodos([
          ...props.todos,
          { id: props.todos.length + 1, title: title, body: body, isDone: false },
        ]);
        // addContent(inputContent)
      }}
    >
      저장
    </button>
  </div>
  );
}

export default Form;