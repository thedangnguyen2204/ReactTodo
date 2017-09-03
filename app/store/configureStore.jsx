// var redux = require('redux');
// var thunk = require ('redux-thunk').default;
// var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');

// export var configure = () => {
// 	var reducer = redux.combineReducers({
// 		name: nameReducer,
// 		hobbies: hobbiesReducer,
// 		movies: moviesReducer,
// 		map: mapReducer
// 	});

// 	var store = redux.createStore(reducer, redux.compose(
// 		redux.applyMiddleware(thunk)
// 	));

// 	return store;
// };

var redux = require('redux');

var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = () => {
	var reducer = redux.combineReducers ({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer
	});

	var store = redux.createStore(reducer, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
};