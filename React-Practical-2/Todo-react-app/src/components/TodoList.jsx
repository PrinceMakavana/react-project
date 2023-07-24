import React from "react";
import { useState } from "react";
import TodoListdata from "../data/TodoListdata";
import TodoListItem from "./TodoListItem";
function TodoList() {
  const [todoListData, setTodoListData] = useState(TodoListdata);
  return (
    <div className='todo-list'>
      {todoListData.map((item) => (
        <TodoListItem
          key={item.id}
          data={item.data}
          isCompleted={item.isCompleted}
        />
      ))}
    </div>
  );
}

export default TodoList;
