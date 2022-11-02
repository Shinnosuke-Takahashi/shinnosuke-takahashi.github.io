import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import tmdsite from '../../assets/images/tmdsite.png';
import tmdcommerce from '../../assets/images/tmdcommerce.png';
import ipfs from '../../assets/images/ipfs.png';

const Work = () => {
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
                            strArray= {'Work'.split("")}
                            idx = {15}
                        />
                    </h1>
                    <p> Here is a selection of some of my work... </p>
                    <p> Enjoy!</p>
                </div>

                <div className='webgrid'>
                    <div className="site">
                        <a href="https://shinnosuke-takahashi.github.io/tuckermeltdown/">
                            <img src={tmdsite} alt="tmdsite_img"/>
                        </a>
                        <br/>
                        Website for band TuckerMeltDown
                        <br/>
                        Built with React, HTML5
                        <br/>
                        Styled with CSS3, Anime.js, react-parallax
                        <br/>
                        Interfaces with Apple Music and Instagram APIs
                    </div>
                    <div className="site">
                        <a href="https://shinnosuke-takahashi.github.io/tmdcommerce/">
                            <img src={tmdcommerce} alt="tmdcommerce_img"/>
                        </a>
                        <br/>
                        Sandbox e-commerce site for band TuckerMeltDown
                        <br/>
                        Built with React, HTML5
                        <br/>
                        Styled with CSS3, Material-UI
                        <br/>
                        Interfaces with commerce.js and Stripe APIs
                    </div>
                    <div className="site">
                        <a href="https://github.com/Shinnosuke-Takahashi/Blockchain-Application-for-IPFS">
                            <img src={ipfs} alt="ipfs_img"/>
                        </a>
                        <br/>
                        Blockchain Ledger Application for an InterPlanetary File System
                        <br/>
                        Built with Python3, Flask, Postman
                        <br/>
                        Thesis project for CUNY Hunter College
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Work