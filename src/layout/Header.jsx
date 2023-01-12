export function Header() {
  return (
    <nav className="green darken-1">
      <div className="container">
        <div className="nav-wrapper">
          <div className="brand-logo">React Movies</div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#!">Repo</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}