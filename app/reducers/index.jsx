export var nameReducer = (state = 'Anonymous', action) => {
	switch (action.type) {
		case 'CHANGE_NAME':
			return action.name;
		default:
			return state;
	}
};

var nextHobbyId = 1;
export var hobbiesReducer = (state = [], action) => {
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

var nextMovieId = 1; 
export var moviesReducer = (state = [], action) => {
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

export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
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