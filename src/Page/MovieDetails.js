import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar';

function MovieDetails(props) {

    let id = useParams().id;
    let movie = props.movies.find(f => f.id === id)
    // let movieLink = 
  return (
   
    <div>
        <h1 className='text-white'>Movie Details</h1>
        <NavBar/>
        <iframe 
            width="684"
            height="385" 
            src={movie.movieLink} 
            title={movie.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>    
         </iframe>
    </div>
  )
}

export default MovieDetails