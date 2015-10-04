import React, {Component} from 'react';

class TodoItem extends Component {
  render () {
    const {item} = this.props;
    return (
      <li>{item.text}</li>
    )
  }
}

export class TodoList extends Component{
  render() {
    const todos = this.props.todos;
    return (
      <ul>
      {todos.map((todo, index) => {
        return <TodoItem key={index} item={todo} /> 
      })}
      </ul>
    )
  }
}

export class AddTodo extends Component {
  onKeyDown(e) {
    if (e.keyCode === 13) this.props.onTodoEntered(e.currentTarget.value);
  }
  
  render() {  
    return (
      <input type="text" placeholder="Enter todo" onKeyDown={::this.onKeyDown} />
    )
  }
}