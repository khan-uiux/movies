import { createContext, useEffect, useState } from "react"

export const MovieContext = createContext(null)

export const ContextProvider = ({children}) => {

    const [Movies, setMovies] = useState([])
    const [query, setQuery] = useState('')
    const [allMovies, setAllMovies] = useState([]);

    const Api_Key = "bf555f9dcec786c28aca45fbbcdff1be"

    useEffect(() => {
        const ApiData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${Api_Key}`)

                const data = await response.json()
                setMovies(data.results)
                setAllMovies(data.results)
            } catch (error) {
                alert(error)
            }
        }
        ApiData()
    }, [])

    const HandleCategory = async (id) => {
        try {
            const categoryResponse = await fetch(`https://api.themoviedb.org/3/movie/${id ? id : 'now_playing'}?api_key=${Api_Key}`)

            const categoryData = await categoryResponse.json()
            setMovies(categoryData.results)
        } catch (error) {
            alert(error)
        }
    }

    const handleSearch = (e) => {

        if (!query) alert('Please Enter Movie Name')
            
        e.preventDefault();

        const queryFilterd = allMovies.filter((movie) =>
            movie.original_title.toLowerCase().includes(query.toLowerCase())
        );
        
        setMovies(queryFilterd)
        setQuery('')
    }

    const value = {
        Movies,
        HandleCategory,
        handleSearch,
        query,
        setQuery
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}