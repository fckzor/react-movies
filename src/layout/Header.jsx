export function Header() {
  return (
    <nav className="green darken-1">
      <div className="container">
        <div className="nav-wrapper">
          <div className="brand-logo">React Movies</div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="https://github.com/fckzor/react-movies"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}