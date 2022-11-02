import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/NYC_S.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react'
import anime from 'animejs';
const Sidebar = () => {

    useEffect(() => {
        const tl = anime.timeline({});
        tl
        .add({
            targets: '.nav-bar',
            opacity: [0, 98],
            easing: 'easeInSine',
            duration: 6000,
            delay: 3000,   
            direction: 'normal',
        })
    })

    return (
        <div className='nav-bar'>
            <Link className='logo' to="/">
                <img src = {LogoS} alt="logo"/>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color = "4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color = "4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="work-link" to="/work">
                    <FontAwesomeIcon icon={faBriefcase} color = "4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color = "4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/shinnosuketakahashi/">
                        <FontAwesomeIcon icon = {faLinkedin} color = "#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Shinnosuke-Takahashi">
                        <FontAwesomeIcon icon = {faGithub} color = "#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar