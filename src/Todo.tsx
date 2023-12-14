import { type Todo as TodoType } from './types';


interface Props extends TodoType {
  onRemoveTodo: (id: number) => void;
   onToggleComplete: ({id, completed}: TodoType) => void
}


export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleComplete}) => {

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleComplete({id, completed: event.target.checked});

    console.log(event.target.checked);
  }
  
  return (
    
    <div className="view">
      <input type="checkbox" checked={completed}  className='toggle'   onChange={handleChangeCheckbox}/>
      <label>{title}</label>
      <button onClick={() => onRemoveTodo(id)} className="destroy"></button>
    </div>
  
  )

  
}