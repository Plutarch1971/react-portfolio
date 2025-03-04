import  '../../App';
import React from 'react';
import {FaGithub, FaLinkedin, FaStackOverflow, FaTwitter, FaEnvelope} from 'react-icons/fa';

// const SocialLinks = ({github, linkedin,thirdPlatform,thirdPlatformType}) => {
    const Footer = ({github, linkedin,thirdPlatform,thirdPlatformType}) => {
    const renderThirdPlatformIcon = () => {
        switch(thirdPlatformType){
            case 'stackoverflow':
                return <FaStackOverflow />;
            case 'twitter':;
                return <FaTwitter />;
            default: null;

        }

    };
    return (
        <div className="footer">  
         <a href="https://github.com" target="_blank" rel="noopener noreferrer">
         <FaGithub /> GitHub </a>
         <a href="www.linkedin.com/in/matthew-mendez-app-developer" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
         </a>
         <a href="mailto:matthewpmendez@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope /> Email
         </a>
        </div>
    );
}
export default Footer;

