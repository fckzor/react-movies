import React from 'react'
import { Movies } from '../components/Movies'
import { Search } from '../components/Search'
import { Preloader } from '../components/Preloader'

const API_KEY = process.env.REACT_APP_API_KEY

export class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  }

  // Запрос данных с API
  fetchMovies = (search = 'matrix', type = 'all') => {
    if (!search) return

    let searchUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type !== 'all' ? `&type=${type}` : ''}`

    fetch(searchUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({movies: data.Search, loading: false}) 
      })
  }
  componentDidMount() {
    this.fetchMovies()
  }
  render() {
    const { movies = [], loading } = this.state 
    return (
      <main className="container content">
        <Search fetchMovies={this.fetchMovies} />
        {
          loading 
            ? <Preloader/>
            : <Movies movies={movies} />
        }
      </main>
    )
  }
}