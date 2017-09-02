var redux = require('redux');
var axios = require('axios');
//Name reducer and action generators
//-----------------------------
var nameReducer = (state = 'Anonymous', action) => {
	switch (action.type) {
		case 'CHANGE_NAME':
			return action.name;
		default:
			return state;
	}
};

var changeName = (name) => {
	return {
		type: 'CHANGE_NAME',
		name: name 
	}
};
//Hobbies reducer and action generators
//-----------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_HOBBY':
			return [
					...state,
					{
						id: nextHobbyId++,
						hobby: action.hobby
					}
			];
		case 'REMOVE_HOBBY':
			return state.filter ( (hobby) => hobby.id !== action.id );
		default:
			return state;
	}
};
var addHobby = (hobby) => {
	return {
		type: 'ADD_HOBBY',
		hobby
	}
};
var removeHobby = (id) => {
	return {
		type: 'REMOVE_HOBBY',
		id
	}
};
//Movies reducer and action generators
//-----------------------------
var nextMovieId = 1; 
var moviesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_MOVIE':
			return [
				...state,
				{
					id: nextMovieId++,
					movie: action.movie
				}
			];
		case 'REMOVE_MOVIE':
			return state.filter( (movie) => movie.id !== movie.id );
		default:
			return state;
	}
};
var addMovie = (movie) => {
	return {
		type: 'ADD_MOVIE',
		movie
	}
};
var removeMovie = (id) => {
	return {
		type: 'REMOVE_MOVIE',
		id
	}
};

//Map reducer and action generators
//-----------------------------
var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
	switch (action.type) {
		case 'START_LOCATION_FETCH':
			return {
				isFetching: true,
				url: undefined
			};
		case 'COMPLETE_LOCTION_FETCH':
			return {
				isFetching: false,
				url: action.url
			};
		default:
			return state;
	}
};

var startLocaitonFetch = () => {
	return {
		type: 'START_LOCATION_FETCH'
	};
};

var completeLocationFetch = (url) => {
	return {
		type: 'COMPLETE_LOCTION_FETCH',
		url: url
	}
};

var fetchLocation = () => {
	store.dispatch(startLocaitonFetch());

	axios.get('http://ipinfo.io').then (function (res) {
		var loc = res.data.loc;
		var baseUrl = 'http://maps.google.com?q=';

		store.dispatch(completeLocationFetch(baseUrl + loc));
	})
};

var reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer,
	map: mapReducer
});

var store = redux.createStore(reducer);

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

fetchLocation();

store.dispatch(changeName('Jon Snow'));

store.dispatch(changeName('Dany'));

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Learning'));

store.dispatch(removeHobby(1));

store.dispatch(addMovie('Game of thrones'));

store.dispatch(removeMovie(1));
