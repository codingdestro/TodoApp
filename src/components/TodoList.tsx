import { Dispatch, SetStateAction } from "react";
import {
  Container,
  TodoBox,
  Card,
  CheckBox,
  UpdateButton,
  BoxContainer,
} from "../styles/todosStyle";

type todoType = { todo: string; done: boolean };

interface Props {
  todos: todoType[];
  markComplete: (idx: number) => void;
  deleteTodo: (idx: number) => void;
  edit: Dispatch<SetStateAction<{ edit: boolean; idx: number }>>;
  setTodo: Dispatch<SetStateAction<string>>;
}
const TodoList = ({
  todos,
  markComplete,
  setTodo,
  deleteTodo,
  edit,
}: Props) => {
  return (
    <Container>
      {todos.length > 0
        ? todos.map((__, idx: number) => {
            return (
              <TodoBox key={idx} className={`${todos[idx].done ? "done" : ""}`}>
                <BoxContainer onClick={() => markComplete(idx)}>
                  <CheckBox className={`${todos[idx].done ? "done" : ""}`} />
                  <Card>{todos[idx].todo}</Card>
                </BoxContainer>
                <BoxContainer>
                  <UpdateButton
                    style={{ backgroundImage: "url('/assets/edit.svg')" }}
                    className="edit"
                    onClick={() => {
                      setTodo(todos[idx].todo);
                      edit({ edit: true, idx: idx });
                    }}
                  />
                  <UpdateButton
                    style={{ backgroundImage: "url('/assets/del.svg')" }}
                    onClick={() => {
                      deleteTodo(idx);
                    }}
                  />
                </BoxContainer>
              </TodoBox>
            );
          })
        : null}
    </Container>
  );
};

export default TodoList;
