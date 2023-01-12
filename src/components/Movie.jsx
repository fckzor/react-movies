export function Movie(props) {
  const {
    Title: title,
    Year: year,
    Type: type,
    Poster: poster,
    imdbID: id,
  } = props

  return (
    <div className="card" id={id}>
      <div className="card-image">
        {
          poster !== 'N/A'
            ? <img className="card-img" src={poster} alt={title} />
            : <img src="https://via.placeholder.com/400x550.png?text=No+image" alt={title} />
        }
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>Year: {year}</p>
        <p>Category: {type}</p>
      </div>
    </div>
  )
}