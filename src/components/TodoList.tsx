import { Dispatch, SetStateAction } from "react";
import { Checkbox } from "./ui/checkbox";

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
    <div className="p-2 border rounded-lg flex flex-col gap-3">
      {todos.length > 0
        ? todos.map((__, idx: number) => {
            return (
              <div key={idx} 
              className={`flex justify-between transition duration-500 ${todos[idx].done ? "text-zinc-300" : ""}`}>
                <div className="flex gap-2 items-center w-full" >
                  <Checkbox id={`${idx}`} checked={todos[idx].done}  onClick={() => markComplete(idx)}/>
                  <label htmlFor={`${idx}`} className="text-sm w-full">{todos[idx].todo}</label>
                </div>
                <div className="flex gap-2 items-center pl-2 ">
                  <div
                    style={{ backgroundImage: "url('/assets/edit.svg')" }}
                    className="edit w-[18px] h-[18px] bg-cover cursor-pointer"
                    onClick={() => {
                      setTodo(todos[idx].todo);
                      edit({ edit: true, idx: idx });
                    }}
                  />
                  <div
                    className="edit w-[18px] h-[18px] bg-cover cursor-pointer"
                    style={{ backgroundImage: "url('/assets/del.svg')" }}
                    onClick={() => {
                      deleteTodo(idx);
                    }}
                  />
                </div>
              </div>
            );
          })
        : <div className="text-center text-rose-500">
          No todos
          </div>}
    </div>
  );
};

export default TodoList;
