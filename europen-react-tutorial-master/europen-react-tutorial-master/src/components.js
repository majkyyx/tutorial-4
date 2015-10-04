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