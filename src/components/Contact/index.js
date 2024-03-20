import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_2zkhykf',
        'template_874p2ex',
        refForm.current,
        'nz_RqT3fteL-4ql0k'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again!')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['c', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            am highly interested in joining a dynamic team where I can
            contribute my skills and collaborate effectively. Furthermore, I am
            actively seeking freelance opportunities as a front-end web
            developer to gain valuable experience and expand my knowledge in the
            field. For any further inquiries, please do not hesitate to contact
            me.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    requiered
                  />
                </li>
                <li className="half">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li className="half">
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
