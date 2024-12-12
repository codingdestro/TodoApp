import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props {
  addTodo: (todo: string) => void;
  edit: { edit: boolean; idx: number };
  todo: string;
  setTodo: (todo: string) => void;
  editTodo: () => void;
}

const Todo = ({ addTodo, edit, editTodo, todo, setTodo }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const addTodoHandle = () => {
    if (!todo) return;
    if (edit.edit) {
      //edit the todo
      editTodo();
    } else {
      addTodo(todo);
    }
    setTodo("");
    inputRef.current?.focus();
  };
  return (
    <div className="flex gap-3 w-full">
      <Input
        ref={inputRef}
        type="text"
        placeholder="task"
        value={todo}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTodoHandle();
        }}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <Button variant={'outline'} onClick={addTodoHandle}>add</Button>
    </div>
  );
};
export default Todo;
