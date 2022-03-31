import React, { useState } from "react";
import Addtodo from "./AddTodo";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [task, setTask] = useState([
    {
      id: uuidv4(),
      title: "Mengerjakan Exercise",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "Mengerjakan Assignment",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Membuat Resume",
      completed: false,
    },
  ]);

  const submitTodo = (title) => {
    setTask([...task, { id: uuidv4(), title, completed: false }]);
  };

  const handleComplete = (todo) => {
    const todos = [...task];
    todos.map((t) => {
      if (t.id === todo.id) {
        t.completed = !t.completed;
      }
      return t;
    });
    setTask([...todos]);
  };

  const handleDelete = (todo) => {
    const todos = task.filter((t) => {
      return t.id !== todo;
    });
    setTask(todos);
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center textHeader">todos</h1>
        <table className="table">
          <tbody>
            <tr>
              <td colSpan="4" className="text-center">
                <Addtodo submitTodo={submitTodo} />
              </td>
            </tr>
            {task.map((todo, todoIdx) => (
              <tr key={todo.id}>
                <Todo
                  todo={todo}
                  handleDelete={handleDelete}
                  handleComplete={handleComplete}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
