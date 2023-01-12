import React from "react"

export class Search extends React.Component {
  state = {
    search: '',
    radioType: 'all',
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.fetchMovies(this.state.search, this.state.radioType)
  }
  onChangeType = (e) => {
    this.setState(() => ({radioType: e.target.value}), () => {
      this.props.fetchMovies(this.state.search || undefined, this.state.radioType)
    })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="input-field search-row">
            <input
              type="search" 
              className="validate"
              placeholder="search"
              value={this.state.search}
              onChange={e => (this.setState({search: e.target.value}))}
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
                onChange={this.onChangeType}
              />
              <span>All</span>
            </label>
            <label className="radio-label">
              <input 
                name="type" 
                type="radio"
                value="movie"
                className="with-gap"
                onChange={this.onChangeType}
              />
              <span>Movies</span>
            </label>
            <label className="radio-label">
              <input 
                name="type" 
                type="radio"
                value="series"
                className="with-gap"
                onChange={this.onChangeType}
              />
              <span>Series</span>
            </label>
          </div>
        </div>
      </form>
    )
  }
}