(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(7),r=n.n(l),c=n(5),i=n(1),u=n(2),d=n(4),s=n(3);var p=function(e){return o.a.createElement("div",{className:"todo-item"},o.a.createElement("li",null,o.a.createElement("input",{type:"checkbox",checked:e.todo.value,onChange:function(){return e.handleChangeProps(e.todo.id)}})," ",e.todo.title,o.a.createElement("button",{type:"button",onClick:function(){return e.handleDeleteProps(e.todo.id)}},"Delete")))},h=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.todos.map((function(t){return o.a.createElement(p,{key:t.id,todo:t,handleDeleteProps:e.props.handleDeleteProps,handleChangeProps:e.props.handleChangeProps})})))}}]),n}(o.a.Component),m=function(){return o.a.createElement("header",null,o.a.createElement("h1",null,"Simple Todo App"),o.a.createElement("p",null,"Please add to-dos item(s) through the input field"))},f=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.updateTitle=function(t){e.setState({title:t.target.value})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{className:"form-container"},o.a.createElement("input",{type:"text",className:"input-text",value:this.state.title,onChange:this.updateTitle})," ",o.a.createElement("button",{className:"input-submit",type:"button",onClick:function(){return e.props.addTodo(e.state.title)}},"Submit")))}}]),n}(o.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={todo:[{id:1,title:"Setup the project",value:!0},{id:2,title:"Declare components",value:!1},{id:3,title:"Deploy everything",value:!1}]},e.handleChange=function(t){console.log("clicked",t),e.setState({todo:e.state.todo.map((function(e){return e.id==t&&(e.value=!e.value),e}))})},e.handleDelete=function(t){console.log(t,"Id to be deleted"),e.setState({todo:Object(c.a)(e.state.todo.filter((function(e){return e.id!==t})))})},e.addTodoItem=function(t){console.log(t,"Title");var n={id:e.state.todo.length+1,title:t,value:!1};e.setState({todo:[].concat(Object(c.a)(e.state.todo),[n])})},e}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(m,null),o.a.createElement(f,{addTodo:this.addTodoItem}),o.a.createElement(h,{todos:this.state.todo,handleDeleteProps:this.handleDelete,handleChangeProps:this.handleChange}))}}]),n}(o.a.Component);n(13);r.a.render(o.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.19531cae.chunk.js.map