import React, { useState } from 'react'
import NavBar from './NavBar';
import Movie from '../Components/Movie';



function Home(props) {

const [title, setTitle] = useState('')
const handleChange = (e) =>{
    setTitle(e.target.value)
}
  return (
         
    <div className='app'>
        <div className='container'>
            <h2 className='text-white'>Movies</h2>
        </div>
        <NavBar/>
        <div className='d-flex justify-content-end ms-1 mt-3 mb-3'>
            <input type="text" className='form-control-lg' placeholder='search' onChange={handleChange} />
        </div>
        <main className='container py-2'>
            <div className='row miabox-card'>
              {props.movies.filter((movie)=>movie.title.toLowerCase().includes(title.toLocaleLowerCase())).map(movie =>(
                <Movie movie = {movie}/>
              ))}
                
            </div>
        </main>
    </div>
  )
}

export default Home