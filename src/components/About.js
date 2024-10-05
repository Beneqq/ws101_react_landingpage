import React, {useState} from 'react';
import web from './Images/Web.png';
import html from './Images/html.png';
import css from './Images/css.png';
import js from './Images/js.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen((prev) => !prev);
    };
    return <>
        <body>
            <div className='About'>
                <img className='web' src={web} alt=''></img>
                <div className='About-info'>
                    <h1>What is <a className='wd-about' href='2'>Web Development?</a></h1>
                    <h4>is a dynamic and multifaceted field that combines technical 
                            skills with creativity. It plays a vital role in shaping
                             how we interact with digital content and services, driving 
                             innovation in technology and user experience. Whether you're building a 
                             personal blog, an e-commerce site, or a complex web application, web development is at the 
                             heart of creating functional and engaging online experiences.</h4>
                            <button onClick={toggleModal} className='see-more'>See More</button>
                    <h4 className='bt'>Basic Tools :</h4>
                    <img className='prog' src={html} alt=''></img>
                    <img className='prog' src={js} alt=''></img>
                    <img className='prog' src={css} alt=''></img>
                </div>             
            </div>
            <div>
        

        {isOpen && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={toggleModal}><a><FontAwesomeIcon icon={faClose}/></a></span>

                    <form className='tools'>
                        <fieldset>
                            <legend>Impotance of Web Development</legend>

                            <legend>Global Reach</legend>
                            <h5>Accessibility:Websites can be accessed from anywhere in the world, allowing businesses and individuals to reach a global audience.</h5>
                            <h5>Availability:Unlike physical stores, websites are available round-the-clock, providing continuous access to information and services</h5>

                            <legend>User Engagement</legend>
                            <h5>Interactive Features: Web development enables the creation of interactive elements like forms, chatbots, and multimedia, enhancing user experience</h5>
                            <h5>Content Management: Regularly updated content (blogs, articles) keeps users engaged and can improve search engine rankings.</h5>

                            <legend>Information Sharing</legend>
                            <h5>Education and Resources: Websites provide a platform for sharing knowledge, tutorials, and resources, making education more accessible.</h5>
                            <h5>Community Building: Forums and social media integrations foster community engagement and collaboration</h5>

                            <legend>Data Analytics</legend>
                            <h5>User Insights: Web development allows businesses to track user behavior, preferences, and trends through analytics tools, enabling data-driven decisions.</h5>
                            </fieldset>
                        
                        
                    </form>
                </div>
            </div>
        )}
        </div>
        </body>
    </>
        
    
};

export default About;