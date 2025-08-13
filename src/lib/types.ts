export type Colors = "red" | "green" | "blue" | "yellow" | "purple" | "orange";

export interface ITodo {
  id: number;
  task: string;
  isCompleted: boolean;
  tags: string[];
  due_to: Date;
  color: Colors;
  createdAt: Date;
  editedAt: Date;
}

export interface IGroup {
  id: number;
  name: string;
  color: Colors;
}
