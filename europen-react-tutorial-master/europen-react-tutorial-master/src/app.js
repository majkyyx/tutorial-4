import React, {Component} from 'react';

import {TodoList} from './components';

const todos = [{text: 'need to learn rect 2', completed: false}]; 

export class App extends Component {
  render() {
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
}