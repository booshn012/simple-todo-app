import React from 'react'
import TodoItem from './TodoItem'


class TodoList extends React.Component{
    render(){
        return(
            <div>
            {this.props.todos.map(todo=>(
              <TodoItem key={todo.id} todo={todo}  handleDeleteProps={this.props.handleDeleteProps}  handleChangeProps={this.props.handleChangeProps}/>
            ))}
            </div>
        )
    }

}


export default TodoList