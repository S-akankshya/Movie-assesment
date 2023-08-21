export const setMovies = (movies) => ({
    type: 'SET_MOVIES',
    payload: movies,
});

export const setSearchResults = (results) => ({
    type: 'SET_SEARCH_RESULTS',
    payload: results,
});

export const fetchMoviesById = async(movieId, dispatch) => {
    console.log("======= fetch mov");
    
        console.log("===== insdie return");
        const apiKey = '77b68e9682fa58d71eddd2ae65f7b456';
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        console.log("===== data in action", data);
        dispatch(setSearchResults(data))
    
}

export const searchMovies = (query) => {
    return async (dispatch) => {
        try {
            // Make API call to search movies
            const searchResults = await fetch(`API_URL/search?q=${query}`);
            const resultsData = await searchResults.json();
            dispatch(setSearchResults(resultsData));
        } catch (error) {
            console.error(error);
        }
    };
};