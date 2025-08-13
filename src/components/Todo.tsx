import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Plus, Edit2 } from "lucide-react";
import SelectColor from "./SelectColor";
import { Colors, ITodo } from "@/lib/types";
import { initTodo } from "@/lib/utils";

interface Props {
  addTodo: (todo: ITodo) => void;
  edit: { edit: boolean; idx: number };
  editTodo: () => void;
}

const Todo = ({ addTodo, edit, editTodo }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [task, setTask] = useState<string>("");
  const [color, setColor] = useState<Colors>("gray");

  const addTodoHandle = () => {
    if (edit.edit) {
      editTodo();
    } else {
      const newTodo = initTodo(task);
      addTodo({ ...newTodo, color });
    }
    setTask("");
    inputRef.current?.focus();
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-foreground mb-1">
          {edit.edit ? "Edit Task" : "Add New Task"}
        </h2>
        <p className="text-sm text-muted-foreground">
          {edit.edit
            ? "Update your task and click save to confirm changes"
            : "Create a new task to add to your todo list"}
        </p>
      </div>

      {/* Input Form */}
      <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <Input
              ref={inputRef}
              type="text"
              placeholder={
                edit.edit ? "Update your task..." : "What needs to be done?"
              }
              value={task}
              className="h-11 text-base transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  addTodoHandle();
                }
              }}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
          </div>

          <SelectColor currentColor={color} setColor={setColor} />

          <Button
            onClick={addTodoHandle}
            disabled={!task.trim()}
            className="h-11 px-6 font-medium transition-all duration-200 hover:scale-105 active:scale-95 sm:min-w-[120px]"
            size="default"
          >
            {edit.edit ? (
              <>
                <Edit2 className="w-4 h-4 mr-2" />
                Update
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 mr-2" />
                Add Task
              </>
            )}
          </Button>
        </div>

        {/* Quick tip */}
        <div className="mt-3 text-xs text-muted-foreground">
          💡 Press Enter to {edit.edit ? "update" : "add"} your task quickly
        </div>
      </div>
    </div>
  );
};
export default Todo;
