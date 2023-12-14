import { Todo } from './Todo';

import {  type ListOfTodos, Todo as TodoType } from './types';

interface Props {
  todos: ListOfTodos
  onRemoveTodo: (id: number) => void
  onToggleComplete: ({id, completed}: TodoType) => void
}

export function Todos({ todos, onRemoveTodo, onToggleComplete }: Props) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo 
            id={todo.id}
            title={todo.title}
            completed={todo.completed} 
            onRemoveTodo={onRemoveTodo }
            onToggleComplete={onToggleComplete}
            />
        </li>
      ))}
    </ul>
  )
}