import React from "react"
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';


class TodoContainer extends React.Component {


    state = {
      todo : [{
            'id' : 1,
            'title' : 'Setup the project',
            'value': true
        },{
            'id' : 2,
            'title' : 'Declare components',
            'value': false
        },{
            'id' : 3,
            'title' : 'Deploy everything',
            'value': false
        }]
    }


    handleChange = (id) => {
        console.log("clicked", id);
        this.setState({
            todo : this.state.todo.map(e=>{
                if(e.id == id){
                    e.value = !e.value;
                }
                return e;
            })
        })
      };
    

      handleDelete = (id) => {
          console.log(id,"Id to be deleted");
          this.setState({
            
             todo : [...this.state.todo.filter(f=>{
                       return f.id !== id  
                   })]
                
        })
      }


      addTodoItem = (title) =>{
          console.log(title,"Title");

          const newTodo = {
              id : this.state.todo.length + 1,
              title : title,
              value : false
          }

        this.setState({
            todo : [...this.state.todo, newTodo]
        })

      }



  render() {
    return (
      <div className="container">
       <Header />
       <InputTodo  addTodo={this.addTodoItem} />
       <TodoList todos={this.state.todo} handleDeleteProps={this.handleDelete} handleChangeProps={this.handleChange} />
      
      </div>
    )
  }
}
export default TodoContainer