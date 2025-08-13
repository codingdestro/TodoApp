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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            Todo Bucket
          </h1>
          <p className="text-muted-foreground text-lg">
            Organize your tasks and boost your productivity
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto space-y-6">
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
    </div>
  );
}

export default App;
