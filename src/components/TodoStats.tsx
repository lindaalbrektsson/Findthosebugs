import type { Todo } from "../types";

interface TodoStatsProps {
  todos: Todo[];
}

export default function TodoStats({ todos }: TodoStatsProps) {
  const total = todos.length;
  const remaining = todos.filter((todo) => !todo.completed).length; //Bugg 1: tidigare stod det todo.completed vilket gjorde att räknade de uppgifter som var klara i stället för de som var kvar att göra.

  return (
    <p className="todo-stats">
      {remaining} kvar av {total}
    </p>
  );
}
