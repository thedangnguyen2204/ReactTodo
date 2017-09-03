var redux = require('redux');
var axios = require('axios');

var action = require('./actions/index');
var store = require('./store/configureStore').configure();
//Subscribe to changes
store.subscribe(() => {
	var state = store.getState();

	console.log('New state is', state);

	if (state.map.isFetching) {
		document.getElementById('app').innerHTML = 'Loading...';
	} else if (state.map.url) {
		document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>';
	}
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(action.fetchLocation());

store.dispatch(action.changeName('Jon Snow'));

store.dispatch(action.changeName('Dany'));

store.dispatch(action.addHobby('Running'));

store.dispatch(action.addHobby('Learning'));

store.dispatch(action.removeHobby(1));

store.dispatch(action.addMovie('Game of thrones'));

store.dispatch(action.removeMovie(1));
