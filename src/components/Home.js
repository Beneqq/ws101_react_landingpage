import React from 'react';
import './Home.css';
import Webdev from './Images/Webdev.png' //imported image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //for importing icons
import {faPaperPlane, faPhone} from '@fortawesome/free-solid-svg-icons'; //imported solid icons
import { faFacebook, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'; //imported brand icons



const Home = () => {
    return <>
        <body>
            <div className='Home'>
                <img className='Webdev' src={Webdev} alt=''></img>
                <div className='Home-info'>
                    <h1>Let's Learn <a className='wd-home'>Web Development</a></h1>
                    <h4>Web development is an art and a science, blending creativity and technology to build experiences that connect people and ideas.
                        It's about crafting user journeys that are intuitive, engaging, and accessible, while constantly adapting to the evolving digital
                        landscape. In every line of code, we have the power to transform concepts into reality, making the web a more dynamic and
                        interactive space for everyone.</h4>
                    <p><a><FontAwesomeIcon icon={faPaperPlane}/></a>quijano.jb23@gmail.com</p>
                    <p><a><FontAwesomeIcon icon={faPhone}/></a>09234567890</p>
                <div className='soc-med'>
                    <a href='https://www.facebook.com/John.benedict.2234'><FontAwesomeIcon icon={faFacebook}/></a>
                    <a href=''><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href=''><FontAwesomeIcon icon={faTelegram}/></a>
                    <a href=''><FontAwesomeIcon icon={faTwitter}/></a>
                </div>
                <a href='' className='btn1'>Download CV</a>
                </div>
            </div>
        </body>
        </>
    

};

export default Home;