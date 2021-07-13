import './Header.scss'

function Header() {
  return (
    <header>
      <div className="name">
        <h1>Mohini Patel</h1>
        <ul className="intro_link">
          <li>
            <a href="mailto:mohinishavati@gmail.com">mohinishavati@gmail.com</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mohini-patel-0870a6127/"
              target="_blank"
            >
              https://www.linkedin.com/in/mohini-patel-0870a6127/
            </a>
          </li>
        </ul>
      </div>
      <hr />
    </header>
  )
}

export default Header
