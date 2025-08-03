import './MovieCard.css'

import starIcon from '../../assets/star.png'

function MovieCard({movie}) {
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}-bad-boa-s`} target='_blank'>
      <div className="card-body">
          <div className="card-image">
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Movie Poster" />
          </div>
          <div className="movie-detail">
              <p>{movie.overview.slice(0, 70) + "..."}</p>
              <p>{Math.round(movie.vote_average)}<span><img src={starIcon} alt="icon" /></span></p>
          </div>
      </div>
    </a>
  )
}

export default MovieCard