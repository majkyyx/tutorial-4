import React, {Component} from 'react';

class TodoItem extends Component {
  render () {
    cons {item} = this.props;
    return (
      <li>{item.text}</li>
    )
  }
}

export class TodoList extends Component{
  render() {
    consts todos = this.props.todos;
    return (
      <ul>
      {todos.map((todo, index) => {
        return <TodoItem key={index} index={todo} /> 
      })}
      </ul>
    )
  }
}