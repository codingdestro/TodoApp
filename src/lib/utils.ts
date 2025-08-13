import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Colors, ITodo } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function initTodo(task: string): ITodo {
  return {
    id: Date.now(),
    task,
    isCompleted: false,
    tags: [],
    due_to: new Date(),
    color: "red",
    createdAt: new Date(),
    editedAt: new Date(),
  };
}
export function addTag(
  todolist: ITodo[],
  todoId: number,
  tag: string
): ITodo[] {
  return todolist.map((todo) =>
    todo.id === todoId ? { ...todo, tags: [...todo.tags, tag] } : todo
  );
}

export function setColor(
  todolist: ITodo[],
  todoId: number,
  color: Colors
): ITodo[] {
  return todolist.map((todo) =>
    todo.id === todoId ? { ...todo, color } : todo
  );
}
