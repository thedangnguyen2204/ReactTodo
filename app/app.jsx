var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('TodoApp');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// ReactDOM.render(
//   // <TodoApp/>,
//   <h1>This is trial</h1>,
//   document.getElementById('app')
// );

require('./redux-example.jsx');
// require('./redux-todo-example.jsx');