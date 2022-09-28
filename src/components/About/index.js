import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import myPhoto from '../../assets/images/shin_headshot-1.JPEG';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray= {'About Me'.split("")}
                            idx = {15}
                        />
                    </h1>
                    <p> Hi, my name is Shinnosuke. I am a software engineer and web developer based in New York City. </p>
                </div>

                <div className='myPhoto'>
                    <img src={myPhoto} alt="img" />
                </div>  
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default About