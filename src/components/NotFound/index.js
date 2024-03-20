// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const theme = isDarkTheme ? 'dark' : 'light'

      return (
        <div className="not-found-home-container">
          <Navbar />
          <div className={`not-found-container ${theme}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-found-image"
              alt="not found"
            />
            <h1 className={`not-found-heading ${theme}`}>Lost Your Way?</h1>
            <p className={`not-found-para ${theme}`}>
              We cannot seem to find the page
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
