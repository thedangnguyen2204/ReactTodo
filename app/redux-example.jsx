var redux = require('redux');

var reducer = (state = {name: 'Anonymous'}, action) => {
	// state = state || {name: 'Anonymous'};
	
	console.log('New Action blabla', action);
	switch (action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
			}
		default:
			return state;
	};
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Dang The'
});

var currentState = store.getState();
console.log('currentState after', currentState);