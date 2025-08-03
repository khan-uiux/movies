import { useContext } from 'react'
import './SearchBar.css'
import { MovieContext } from '../../MovieContext/MovieContext'

function SearchBar() {

    const {handleSearch, query, setQuery} = useContext(MovieContext)

  return (
    <form onSubmit={handleSearch}>
        <input type="text" placeholder='Search Movie' value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBar