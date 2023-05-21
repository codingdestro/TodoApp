import { useRef } from "react";
import { Container, Input, AddButton } from "../styles/todoStyle";

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
    <Container>
      <Input
        ref={inputRef}
        type="text"
        placeholder="todo..."
        value={todo}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTodoHandle();
        }}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <AddButton onClick={addTodoHandle}>add</AddButton>
    </Container>
  );
};
export default Todo;
