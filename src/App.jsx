import AppName from "./components/AppName"
import Addtodo from "./components/Addtodo"
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css"
import {useState } from "react";
function App() {
  const initialTodoItems = [{
    name:"Buy Milk",
    dueDate:"4/10/2023"
  }, {
    name:"Go to",
    dueDate:"4/10/2023"
  },{
    name:"Anchal",
    dueDate:"8/10/2023"
  }]
  let [todoItems,setTodoItems]= useState(initialTodoItems);
  const handleNewItem = (itemName,itemDueDate)=>{
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    setTodoItems((curValue)=>[...curValue,{name:itemName,dueDate:itemDueDate}
      ]
    );
  }
  const handleDeleteItem = (todoItemName)=>
  {
    const newTodoItem = todoItems.filter(item=>item.name !==todoItemName);
    setTodoItems(newTodoItem)
 console.log(`item deleted:${todoName}`);
  }
    return <center className="todo-container">
      <AppName />
      <Addtodo onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}   
      <ToDoItems onDeleteClick={handleDeleteItem} todoItems={todoItems}></ToDoItems>
      </center>
}
export default App;