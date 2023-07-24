import React from "react";

function TodoListItem({ data, isCompleted }) {
  return (
    <div className={"item" + `${isCompleted ? " item-completed" : ""}`}>
      <div className='todo-name'>
        <p>{data}</p>
      </div>
      <div className='item-complete'>
        <span className='item-complete-btn'></span>
      </div>
    </div>
  );
}

export default TodoListItem;
