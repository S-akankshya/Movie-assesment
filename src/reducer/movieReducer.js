const initialState = {
    movies: [],
    searchResults: {},
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MOVIES':
        return { ...state, movies: action.payload };
      case 'SET_SEARCH_RESULTS':
        return { ...state, searchResults: action.payload };
      default:
        return state;
    }
  };
  
  export default movieReducer;