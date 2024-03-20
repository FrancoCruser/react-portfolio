import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId) // Devolver una función de limpieza
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a junior web developer with a passion for technology and
            software development. I am particularly interested in specializing
            in React and other modern technologies for web development.
          </p>
          <p>
            Currently, I am seeking opportunities to join a dynamic and
            collaborative team where I can expand my knowledge and skills in web
            development. I am excited about the prospect of working on
            challenging projects that will allow me to continue learning and
            growing professionally.
          </p>
          <p>
            I have experience working with HTML, CSS, JavaScript, and I am
            familiar with tools such as Git and npm. I am eager to learn new
            technologies and am willing to dedicate time and effort to improve
            my skills.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGitAlt} color="#F05032" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faAngular} color="#fff" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
