import React from "react";
import "./TodoList.css";

export default function TodoList({ todos, dispatch }) {
  console.log("Rendered TodoList");
  const [filter, setFilter] = React.useState("ALL");
  // all useReducers gets a separate state and dispatch method, so changing in one file does not affect other one

  const filteredTodos = React.useMemo(() => {
    if (filter === "COMPLETE") return todos.filter((todo) => todo.complete);
    if (filter === "INCOMPLETE") return todos.filter((todo) => !todo.complete);
    return todos;
  }, [todos, filter]);

  // const filteredTodos = todos;

  const checkBoxChecked = React.useCallback(
    (todo) => {
      dispatch({ type: "COMPLETE", payload: todo });
    },
    [dispatch],
  );

  const deleteClicked = React.useCallback(
    (todo) => {
      dispatch({ type: "DELETE", payload: todo });
    },
    [dispatch],
  );

  return (
    <>
      <div className="todolist">
        {filteredTodos &&
          filteredTodos.map((todo) => (
            <div key={todo.id} className="listItemStyle">
              <div className={todo.complete ? "doneTodo" : ""}>{todo.text}</div>
              <div>
                <button onClick={() => deleteClicked(todo)}>Delete</button>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => checkBoxChecked(todo)}
                />
              </div>
            </div>
          ))}
      </div>
      <div className="filteringButton">
        <button onClick={() => setFilter("ALL")}>All</button>
        <button onClick={() => setFilter("COMPLETE")}>Complete</button>
        <button onClick={() => setFilter("INCOMPLETE")}>Incomplete</button>
      </div>
    </>
  );
}
