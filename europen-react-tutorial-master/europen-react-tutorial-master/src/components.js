import React, {Component} from 'react';

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