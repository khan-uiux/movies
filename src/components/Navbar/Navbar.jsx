import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { MovieContext } from '../../MovieContext/MovieContext'
import SearchBar from '../Search/SearchBar'

function Navbar() {

  const {HandleCategory} = useContext(MovieContext)

  return (
    <header className='header-main'>
        <div className="brand">
            <Link to='/'>
              <h1 onClick={() => HandleCategory()}>Movie App</h1>
            </Link>
        </div>
        <div className="form">
          <SearchBar />
        </div>
        <div className="nav_links">
            <ul className=''>
                <li onClick={() => HandleCategory('popular')}>
                  <NavLink to='/popular'>Popular</NavLink>
                </li>
                <li onClick={() => HandleCategory('top_rated')}>
                  <NavLink to='/top-rated'>Top Rated</NavLink>
                </li>
                <li onClick={() => HandleCategory('upcoming')}>
                  <NavLink to='/upcoming'>Upcoming</NavLink>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar