import React, { useState } from "react"

export function Search(props) {
  const { fetchMovies } = props

  const [search, setSearch] = useState('')
  const [radioType, setRadioType] = useState('all')

  const onSubmit = (e) => {
    e.preventDefault()
    fetchMovies(search, radioType)
  }
  const onChangeType = (e) => {
    setRadioType(prevValue => {
      prevValue = e.target.value
      fetchMovies(search || undefined, prevValue)
      return prevValue
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="input-field search-row">
          <input
            type="search" 
            className="validate"
            placeholder="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button className="btn search-btn">Search</button>
        </div>
        <div>
          <label className="radio-label">
            <input 
              name="type" 
              type="radio"
              value="all"
              className="with-gap"
              onChange={onChangeType}
            />
            <span>All</span>
          </label>
          <label className="radio-label">
            <input 
              name="type" 
              type="radio"
              value="movie"
              className="with-gap"
              onChange={onChangeType}
            />
            <span>Movies</span>
          </label>
          <label className="radio-label">
            <input 
              name="type" 
              type="radio"
              value="series"
              className="with-gap"
              onChange={onChangeType}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    </form>
  )
}