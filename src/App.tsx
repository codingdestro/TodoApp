import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import todoType from "./app.ts";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState({
    edit: false,
    idx: 0,
  });
  const [todoList, setTodoList] = useState<todoType[]>([
    {
      todo: "Test Todo",
      done: false,
    },
  ]);
  const addTodo = (todo: string) => {
    setTodoList((prev: todoType[]) => [...prev, { todo: todo, done: false }]);
  };

  const markComplete = (idx: number) => {
    setTodoList(() =>
      todoList.map((item: todoType, index: number) => {
        return index === idx ? { done: !item.done, todo: item.todo } : item;
      })
    );
  };

  const deleteTodo = (index: number) => {
    setTodoList(() =>
      todoList.filter((_: todoType, idx: number) => idx !== index)
    );
  };

  const edit = () => {
    setTodoList(() =>
      todoList.map((item: todoType, index: number) => {
        return index === editTodo.idx ? { done: item.done, todo: todo } : item;
      })
    );
    setEditTodo({ edit: false, idx: 0 });
  };

  return (
    <div className="p-5 flex gap-5 flex-col items-center">
      <div className="border-b border-black px-5">
        Todo Bucket
      </div>
      <div className="flex flex-col gap-3 w-full max-w-[600px]">
        <Todo
          edit={editTodo}
          editTodo={edit}
          addTodo={addTodo}
          todo={todo}
          setTodo={setTodo}
        />
        <TodoList
          todos={todoList}
          markComplete={markComplete}
          deleteTodo={deleteTodo}
          edit={setEditTodo}
          setTodo={setTodo}
        />
      </div>
    </div>
  );
}

export default App;
