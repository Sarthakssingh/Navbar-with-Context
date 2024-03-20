// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const theme = isDarkTheme ? 'dark' : 'light'
      return (
        <div className={`nav-bar-container-${theme}`}>
          <img
            src={`https://assets.ccbp.in/frontend/react-js/website-logo-${theme}-theme-img.png`}
            className="website-logo"
            alt="website logo"
          />
          <ul className="middle-items">
            <li className="list-item">
              <Link to="/" className={`link-${theme}`}>
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link to="/about" className={`link-${theme}`}>
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="theme-button"
            data-testid="theme"
            onClick={toggleTheme}
          >
            <img
              src={
                !isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
              }
              className="theme-img"
              alt="theme"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
