import React from 'react'
import './ListPage.css'
import { useParams,useNavigate } from 'react-router-dom'
import { fetchMoviesById, setSearchResults } from './action/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai'


function ListPage() {
  const {movieId} = useParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const dataList = useSelector(state => state.searchResults)
  React.useEffect(() => {
    fetchMoviesById(movieId, dispatch)
    return()=>{
      dispatch(setSearchResults({}))
    }
  },[dispatch])
  return (
  <>
  <AiOutlineArrowLeft onClick={()=>Navigate('/')}/>
    <div className='main_div_singlepage'>
      <div>
      <img width="280px" height="300px" src={"https://image.tmdb.org/t/p/original"+dataList.poster_path}/>
      </div>
      <div>
      <h2>{dataList.title}</h2>
      <h4>{dataList.release_date}</h4>
      <h4>{dataList.vote_average}</h4>
      <p>{dataList.overview}</p>
      </div>
    </div>
    </>
  )
}

export default ListPage
