import ToDoItem from "./ToDoItem";
import styles from './ToDoItems.module.css'
const ToDoItems = ({todoItems,onDeleteClick}) =>{
    return (
    <div className={styles['items-Container']}>
        {todoItems.map((item)=> (<ToDoItem key={item.name} onDeleteClick={onDeleteClick} todoName={item.name} todoDate={item.dueDate}></ToDoItem>))
        }
</div>)
}
export default ToDoItems;