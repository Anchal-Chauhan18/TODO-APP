import { useState ,useRef} from "react";
import { MdAddComment} from "react-icons/md";
function Addtodo({onNewItem})
{
  // const [todoName,setTodoName] = useState("");
  // const [todoDate,setTodoDate] = useState("");
  // const handleNameChange = (event) =>{
  //   setTodoName(event.target.value);
  // }
  // const handleDateChange=(event)=>{
  //   setTodoDate(event.target.value);
  // }
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const handleAddButtonClicked = (event)=>{
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    console.log(`${todoName} due on:${dueDate}`)
    onNewItem(todoName,dueDate);
    // setTodoDate("");
    // setTodoName("");
  }
return <div className="container text-center">
<form className="row kg-row" onSubmit={handleAddButtonClicked}>
  <div className="col-6"><input type="text" ref={todoNameElement} placeholder="Enter Todo here" /></div>
  <div className="col-4"><input  ref={dueDateElement} type="date" /></div>
  <div className="col-2"><button type="submit" className="btn btn-success kg-button"><MdAddComment /></button>
</div>
</form>
</div>
}
export default Addtodo;