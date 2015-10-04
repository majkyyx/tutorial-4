import React from 'react';
import ReactDOM from 'react-dom';

//import './css/skeleton';

import {createStore} from 'redux';
import {todoApp} from './src/reducers';
import {addTodo} from './src/actions';

let store = createStore(todoApp);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log(store.getState());

store.dispatch(addTodo('Need to learn redux'));

unsubscribe();

let rootElement = document.getElementById('root');
ReactDOM.render(
  <div>Hello world!</div>,
  rootElement
);
