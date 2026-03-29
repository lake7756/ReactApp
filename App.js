import React from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";
import ReducerFunction from "./ReducerFunction";

const initialState = [
  { id: 1, text: "Wash clothes", completed: false },
  { id: 2, text: "Mend saree", completed: false },
  { id: 3, text: "Watch a movie", completed: false },
  { id: 4, text: "Take a bath", completed: false },
  { id: 5, text: "Coding", completed: false },
  { id: 6, text: "Practise football", completed: false },
  { id: 7, text: "Play cricket", completed: false },
  { id: 8, text: "Go for a walk", completed: false },
  { id: 9, text: "Skip a rope", completed: false },
  { id: 10, text: "Do yoga", completed: false },
  { id: 11, text: "Walk dog", completed: false },
  { id: 12, text: "Practise react", completed: false },
  { id: 13, text: "Listen Podcast", completed: false },
  { id: 14, text: "10k steps", completed: false },
  { id: 15, text: "Make way for noddy", completed: false },
];
export default function App() {
  const [todos, dispatch] = React.useReducer(ReducerFunction, initialState);
  return (
    <div>
      <Todo dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}
