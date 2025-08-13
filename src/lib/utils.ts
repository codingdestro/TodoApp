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
    color: "gray",
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

export function getColor(color: Colors): String {
  switch (color) {
    case "red":
      return "bg-red-200 text-red-500";
    case "blue":
      return "bg-blue-200 text-blue-500";
    case "green":
      return "bg-green-200 text-green-500";
    case "yellow":
      return "bg-yellow-200 text-yellow-600";
    case "orange":
      return "bg-orange-200 text-orange-600";
    case "purple":
      return "bg-purple-200 text-purple-500";
    case "brown":
      return "bg-amber-700 text-amber-200";
    case "gray":
      return "bg-gray-200 text-gray-600";
    case "pink":
      return "bg-pink-200 text-pink-500";
    default:
      return "bg-gray-200 text-white";
  }
}
