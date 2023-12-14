import {useState} from 'react';
import {Todos} from './Todos';

import './App.css'
import { type Todo } from './types';


const listTodo = [
    {
        id: 1,
        title: 'Learn Typescript',
        completed: true
    },
    {
        id: 2,
        title: 'Build a Todo App',
        completed: false
    }
] 



export default function App() {
  const [todos, setTodos] = useState(listTodo);

  const handleRemove = (id: number): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  const handleCompleted = ({id, completed}: Todo): void => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed
          }
        }
        return todo;
      })

    setTodos(newTodos)
  }
  
  // const [task, setTask] = useState<Todo[]>([])

  // const addTask = (e) => {
  //   e.preventDefault()
    
  //   const formData = new FormData(e.currentTarget)
  //   const title = formData.get('title')

    
  //   const newTask: Todo = {
  //     id: task.length + 1,
  //     title: title,
  //     completed: false
  //   }
  //   setTask([...task, newTask])
    
  //   e.currentTarget.reset()
  // }


  
  return (
    <main className="todoapp">
      <Todos todos={todos}  onRemoveTodo={handleRemove} onToggleComplete={handleCompleted}/>
    
    </main>
  )
}