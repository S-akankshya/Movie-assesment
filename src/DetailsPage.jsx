import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './DetailsPage.css'
import { NavLink } from 'react-router-dom';

const API_KEY = '77b68e9682fa58d71eddd2ae65f7b456';
const BASE_URL = 'https://api.themoviedb.org/3';

const DetailsPage = () => {
    const [movies, setMovies] = useState([]);
    const[search,setSearch]= useState("");
    const[filteredMovie,setFilteredMovie]= useState([])
    const [page, setPage] = useState(1);
    const heightRef = useRef();

    window.addEventListener('scroll', () => {
        // console.log("====== fetchmov heightRef", window.scrollY);

        if(window.scrollY === 2000){
            console.log("====== fetchmov inside if");
            fetchMovies(2)
        } else if (window.scrollY === 4000){
            console.log("====== fetchmov inside else if");
            fetchMovies(3)
        }
    } );

    const handleChange =(e) =>{
        setSearch(e.target.value)
         const res = movies.filter((ele)=>{
            return ele.title.toLowerCase().includes(e.target.value.toLowerCase())
         })
         setFilteredMovie(res);
       
    }

    const fetchMovies = async (pagenNumber) => {
        // console.log("======= fetchmovie");
        const page = pagenNumber ? pagenNumber : 1
        try {
            const response = await axios.get(
                `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_year=2023/569094`
            );
            setMovies(prev => [...prev,...response.data.results]);
            console.log('hgf', response.data.results)
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [page]);

    return (
        <div ref={heightRef}>
            <input onChange={handleChange} value={search}></input>
            <div className='main_div'>
            {(search?filteredMovie:movies).map((movie, index) => (
                    <div className='section_one' key={movie.id}>
                    {/* <h3>{index + 1}</h3> */}
                    <NavLink to={`ListPage/${movie.id}`}   rel="noopener noreferrer">
                        
                            <div key={movie.id}>
                            <img height="100px" width="320px" src={"https://image.tmdb.org/t/p/original"+movie.backdrop_path} />
                            <h3>{movie.title}</h3>
                            <h5>{movie.vote_average}</h5>
                            </div>
                        
                    </NavLink>
                    </div>
                ))}
            </div>
            <div>
            </div>
        </div>
    );
};

export default DetailsPage;
