import React from "react";
import "./Todo.css";
import "./FilteringButton.css";

const Todo = React.memo(({ dispatch }) => {
  console.log("Rendered Todo");
  const todoText = React.useRef("");

  const addHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        text: todoText.current.value,
        complete: false,
      },
    });
    todoText.current.value = "";
  };

  return (
    <div className="todo">
      <span className="spanStyle">
        <input
          type="text"
          placeholder="Add a Todo!"
          className="inputStyle"
          ref={todoText}
        />
        <button onClick={addHandler}>Add</button>
      </span>
    </div>
  );
});

export default Todo;
