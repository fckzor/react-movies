import React, {useState, useEffect} from 'react'
import { Movies } from '../components/Movies'
import { Search } from '../components/Search'
import { Preloader } from '../components/Preloader'

const API_KEY = process.env.REACT_APP_API_KEY

export function Main() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  // Запрос данных с API
  const fetchMovies = (search = 'matrix', type = 'all') => {
    if (!search) return

    let searchUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type !== 'all' ? `&type=${type}` : ''}`

    fetch(searchUrl)
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }
  useEffect(() => {
    fetchMovies()
  }, [])
  
  return (
    <main className="container content">
      <Search fetchMovies={fetchMovies} />
      {
        loading 
          ? <Preloader/>
          : <Movies movies={movies} />
      }
    </main>
  )
}