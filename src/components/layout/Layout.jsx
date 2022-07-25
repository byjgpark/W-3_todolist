import { Component, useState } from "react";

import Header from "../header/Header.jsx"
import Form from "../form/Form.jsx"
import List from "../list/List.jsx"

function Layout() {
  let [todos, setTodos] = useState([
    {},
  ]);

  return (
    <div className="layout">
      <Header/>
      <Form setTodos={setTodos} todos={todos}/>
      <List setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default Layout;