import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TodoList} from './components';
import {AddTodo} from './components';
import {addTodo} from './actions';

// const todos = [{text: 'need to learn rect 2', completed: false}]; 

export class App extends Component {
  onTodoEntered(value) {
    this.props.dispatch(addTodo(value));
  }
  render() {
    return (
      <div>
        <AddTodo onTodoEntered={::this.onTodoEntered} />
        <TodoList todos={this.props.todos} />
      </div>
    )
  }
}

function select(state){
  return {
    todos: state.todos
  }
}

export default connect(select)(App);