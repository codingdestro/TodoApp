import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { ITodo } from "./lib/types.ts";
function App() {
  const [editTodo, setEditTodo] = useState({
    edit: false,
    idx: 0,
  });
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const addTodo = (todo: ITodo) => {
    setTodoList((prev) => [...prev, todo]);
  };

  const markComplete = (idx: number) => {
    setTodoList((prev) =>
      prev.map((todo, index) =>
        index === idx ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (index: number) => {
    setTodoList((prev) => prev.filter((_, i) => i !== index));
  };

  const edit = () => {};

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
          />
          <TodoList
            todos={todoList}
            markComplete={markComplete}
            deleteTodo={deleteTodo}
            edit={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
