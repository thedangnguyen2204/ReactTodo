var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('TodoApp');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New State', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
  	<TodoApp/>
  </Provider>,
  document.getElementById('app')
);

// require('./redux-example.jsx');
// require('./redux-todo-example.jsx');