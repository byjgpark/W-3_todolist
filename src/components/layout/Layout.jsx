import {useState } from "react";

import Header from "../header/Header.jsx"
import Form from "../form/Form.jsx"
import List from "../list/List.jsx"

function Layout() {

  // Hook for todos
  let [todos, setTodos] = useState([
    {},
  ]);

  return (
    <div className="layout">
      <Header/>
      {/* Passing down the hook for todos & setTodos */}
      <Form setTodos={setTodos} todos={todos}/>
      {/* Passing down the hook for todos & setTodos */}
      <List setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default Layout;