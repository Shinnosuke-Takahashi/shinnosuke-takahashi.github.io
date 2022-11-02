import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();
    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_qqko3fa',
                'template_vy6x5zp',
                refForm.current,
                'ZmrWg2TwnDFqdmgpS'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again')
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
                        strArray={"Contact Me".split("")} 
                        idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities -- especially ambitious or large projects. That being said, feel free to contact me for any reason!
                </p>
            </div>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Name"
                                    required />
                            </li>
                            <li className='half'>
                                <input 
                                    type = "email" 
                                    name = "email" 
                                    placeholder="Email" 
                                    required />
                            </li>
                            <li>
                                <input 
                                    placeholder="Subject" 
                                    type="text" 
                                    name="subject" 
                                    required/>
                            </li>
                            <li>
                                <textarea 
                                placeholder="Message"
                                name="message"
                                required
                                ></textarea>
                            </li>
                            <li>
                                <input 
                                    type="submit"
                                    className="flat-button" 
                                    value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
        </div>
        <Loader type="pacman"/>
    </>
    )
}

export default Contact