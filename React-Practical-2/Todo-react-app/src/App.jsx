// import "./App.css";
import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import { useRef, useState } from "react";
function App() {
  return (
    <Layout>
      <Header/>
      <TodoList />
      <AddTask />
    </Layout>
  );
}

export default App;
