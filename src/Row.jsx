import React , {useEffect,useState} from 'react';
import './Row.css'
import tmdbAxiosInstance from './tmdbAxiosInstance';
function Row({title,fetchUrl,isPoster}) {
    console.log(fetchUrl);

  const[allMovies,setAllMovies]=useState()
  const base_url = `https://image.tmdb.org/t/p/original/`;
    const fetchData=async()=>{
    const {data}=  await tmdbAxiosInstance.get(fetchUrl)
    setAllMovies(data.results);
    }
    console.log(allMovies)
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div className='row'>
      <h1>{title}</h1>
    <div className='movies-row'>
    {
      allMovies?.map(item=>(
        <img className={`${isPoster && 'movie-poster'} movie-image`} src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path}`} alt="imgg"/>
      ))
    }
    </div>
    </div>
  )
}

export default Row