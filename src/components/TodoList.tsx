import { Dispatch, SetStateAction } from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Edit2, Trash2, CheckCircle2, Circle } from "lucide-react";
import { ITodo } from "@/lib/types";
import { getColor } from "@/lib/utils";

interface Props {
  todos: ITodo[];
  markComplete: (idx: number) => void;
  deleteTodo: (idx: number) => void;
  edit: Dispatch<SetStateAction<{ edit: boolean; idx: number }>>;
}

const TodoList = ({ todos, markComplete, deleteTodo, edit }: Props) => {
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const totalCount = todos.length;

  return (
    <div className="w-full">
      {/* Header with stats */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Your Tasks</h3>
        {totalCount > 0 && (
          <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
            {completedCount} of {totalCount} completed
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {totalCount > 0 && (
        <div className="my-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>Progress</span>
            <span>{Math.round((completedCount / totalCount) * 100)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary rounded-full h-2 transition-all duration-300 ease-out"
              style={{ width: `${(completedCount / totalCount) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Todo List */}
      <div className="bg-card border border-border rounded-lg shadow-sm">
        {todos.length > 0 ? (
          <div className={`divide-y divide-border`}>
            {todos.map((todo, idx) => (
              <div
                key={idx}
                className={`p-4 flex items-center gap-3 group transition-all duration-200 ${
                  todo.isCompleted ? "opacity-60" : ""
                } ${getColor(todo.color)}`}
              >
                {/* Checkbox */}
                <div className="flex-shrink-0">
                  <Checkbox
                    id={`todo-${idx}`}
                    checked={todo.isCompleted}
                    onClick={() => markComplete(idx)}
                    className="w-5 h-5"
                  />
                </div>

                {/* Todo Text */}
                <div className="flex-1 min-w-0">
                  <label
                    htmlFor={`todo-${idx}`}
                    className={`text-sm sm:text-base cursor-pointer block truncate pr-2 ${
                      todo.isCompleted
                        ? "line-through text-muted-foreground"
                        : ""
                    }`}
                    title={todo.task}
                  >
                    {todo.task}
                  </label>
                </div>

                {/* Status Indicator */}
                <div className="flex-shrink-0 hidden sm:block">
                  {todo.isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  ) : (
                    <Circle className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex-shrink-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-blue-100 hover:text-blue-600"
                    onClick={() => {
                      edit({ edit: true, idx: idx });
                    }}
                    title="Edit task"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600"
                    onClick={() => deleteTodo(idx)}
                    title="Delete task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-muted-foreground" />
            </div>
            <h4 className="text-lg font-medium text-foreground mb-2">
              No tasks yet
            </h4>
            <p className="text-muted-foreground">
              Add your first task above to get started with your todo list!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
