import React from 'react'

const Todolist = ({todos,deleteHandler}) => {
  return (
    <div>
        {todos.map((todo,index) =><div key={index} className="u">
           <center> <h5>{todo} &nbsp; &nbsp; &nbsp;<button onClick={()=>deleteHandler(index)}>delete</button></h5></center>
        </div>)}
    </div>
  )
}

export default Todolist