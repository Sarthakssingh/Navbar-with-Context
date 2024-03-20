// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'
      return (
        <div className="main-home-container">
          <Navbar />
          <div className={`home-container-${theme}`}>
            <img
              src={`https://assets.ccbp.in/frontend/react-js/home-${theme}-img.png`}
              className="home-image"
              alt="home"
            />
            <h1 className={`home-heading-${theme}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
