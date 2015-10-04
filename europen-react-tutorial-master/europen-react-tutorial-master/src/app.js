import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TodoList} from './components';

// const todos = [{text: 'need to learn rect 2', completed: false}]; 

export class App extends Component {
  render() {
    return (
      <div>
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