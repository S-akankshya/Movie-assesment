// import { useEffect } from "react";



// function Tmdb() {
//     const apiKey = '77b68e9682fa58d71eddd2ae65f7b456';
//     const movieId = ["569094", "238"]; // Replace with the actual movie ID


//     const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
//     useEffect(() => {
//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(data => {
//                 // Display movie details using 'data'
//                 console.log(data);
//             })
//             .catch(error => {
//                 console.error('****Error fetching data:', error);
//             });
//     })
//     return (
//         <div>
//             <h1>Hello Tmdb</h1>

//         </div>
//     )
// }
// export default Tmdb;