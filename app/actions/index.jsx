var axios = require('axios');
export var changeName = (name) => {
	return {
		type: 'CHANGE_NAME',
		name: name 
	}
};

export var addHobby = (hobby) => {
	return {
		type: 'ADD_HOBBY',
		hobby
	}
};

export var removeHobby = (id) => {
	return {
		type: 'REMOVE_HOBBY',
		id
	}
};

export var addMovie = (movie) => {
	return {
		type: 'ADD_MOVIE',
		movie
	}
};

export var removeMovie = (id) => {
	return {
		type: 'REMOVE_MOVIE',
		id
	}
};

export var startLocaitonFetch = () => {
	return {
		type: 'START_LOCATION_FETCH'
	};
};

export var completeLocationFetch = (url) => {
	return {
		type: 'COMPLETE_LOCTION_FETCH',
		url: url
	}
};

export var fetchLocation = () => {
	return (dispatch, getstate) => {
		dispatch(startLocaitonFetch());

		axios.get('http://ipinfo.io').then (function (res) {
		var loc = res.data.loc;
		var baseUrl = 'http://maps.google.com?q=';

		dispatch(completeLocationFetch(baseUrl + loc));
	})
	};
};