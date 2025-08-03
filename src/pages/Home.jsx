import { useContext } from 'react'
import { MovieContext } from '../MovieContext/MovieContext'
import MovieCard from '../components/MovieCard/MovieCard'

function Home() {

  const {Movies} = useContext(MovieContext)
  
  return (
    <>
      <div className="card-grid">
        { Movies.length > 0 ? Movies.map((movie) => {
          return <MovieCard key={movie.id} movie ={movie} />
        }) : <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:"#fff"}}>
                loader...
        </div> }
      </div>
    </>
  )
}

export default Home
