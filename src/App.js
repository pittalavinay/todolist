import React,{useState} from 'react'
import Todolist from './Todolist'
import './t.css'
function App() {
  const [data,setdata]=useState(" ");
  const [todo,settodo]=useState([]);
  const changeHandler=e=>{
    setdata(e.target.value);
  }
  const submitHandler=e=>
  {
    e.preventDefault();
    let newtodo=[...todo,data];
    settodo(newtodo);
    setdata(" ");
    console.log(data);
  }
  const deleteHandler=(indexValue)=>
  {
    const ntodo=todo.filter((todo,index)=>index!==indexValue );
    settodo(ntodo);
  }
  return (
<div><center>
<form onSubmit={submitHandler} className="f">
  <h1>TODOLIST</h1><br/><br/>
   <input onChange={changeHandler} value={data}></input>
   <input type="submit" value="add"/>
</form>
<div className="b">
  <div className='l'>

  </div>
</div>
<Todolist  todos={todo}  deleteHandler={deleteHandler}/></center>
</div>
  );
}

export default App;
