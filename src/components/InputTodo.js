import React from 'react'


class InputTodo extends React.Component{
   
    state = {
      title : ""
    }


    updateTitle = e =>{
        this.setState({title: e.target.value});
    }

    render(){
        return(
            <React.Fragment>
            <form className="form-container">
            <input type="text"  className="input-text" value={this.state.title} onChange={this.updateTitle}></input> <button  className="input-submit" type="button" onClick={()=>this.props.addTodo(this.state.title)}>Submit</button> 
            </form>
            </React.Fragment>
        )
    }
}


export default InputTodo