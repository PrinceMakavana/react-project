import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function AddTask() {
  const [isInputActive, setIsInputActive] = useState(false);
  const activeInput = () => {
    setIsInputActive(isInputActive ? false : true);
  };
  return (
    <div className='add-task'>
      {isInputActive ? (
        <div className='item'>
          <div className='todo-name'>
            <input type='text' />
          </div>
          <div className='item '>
            <div className='add'>
              <span className='add-btn'></span>
            </div>
          </div>
        </div>
      ) : (
        <span onClick={activeInput} className='add-task-icon'>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      )}
    </div>
  );
}

export default AddTask;
