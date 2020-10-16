import React from 'react'

function TodoItem(props) {


   
    return(
      <div className="todo-item">         
         <li> 
         <input type="checkbox" checked={props.todo.value} onChange={() => props.handleChangeProps(props.todo.id)} /> {props.todo.title}
         <button type="button" onClick={()=>props.handleDeleteProps(props.todo.id)}>Delete</button>
         </li>
      </div>
    )
    }



export default TodoItem