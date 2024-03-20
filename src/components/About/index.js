// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'
      return (
        <div className="about-home-container">
          <Navbar />
          <div className={`about-container-${theme}`}>
            <img
              src={`https://assets.ccbp.in/frontend/react-js/about-${theme}-img.png`}
              className="about-image"
              alt="about"
            />
            <h1 className={`about-heading-${theme}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
