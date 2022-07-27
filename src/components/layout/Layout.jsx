import {useState } from "react";

import Header from "../header/Header.jsx"
import Form from "../form/Form.jsx"
import List from "../list/List.jsx"
import "./style.css";

function Layout() {

  // Hook for todos that doesnt have any property
  let [todos, setTodos] = useState([
    { id: 0, title: "리덕스 공부하기", body: "이번주 시작합시다", isDone: false },
    { id: 1, title: "알고리즘 공부하기", body: "매일합니다", isDone: true }
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