import React from 'react'
import ReactStars from 'react-stars'
function MovieCard({movie}) {
  return (
    
    <div className="card">


      <img src={movie.poster_url} alt=''/>
      <div className="movie-tle">
      <h1>{movie.caption}</h1>
      <ReactStars count={5} value={movie.rating} onChange={()=>{}}  size={24}  color2={'#ffd700'} edit={false}/>
      </div>

    </div>
  )
}

export default MovieCard