import  '../../App';
import React from 'react';
import {FaGithub, FaLinkedin, FaStackOverflow, FaTwitter} from 'react-icons/fa';

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
         <a href="https://www.linkedin.com/feed/?trk=help_me_menu" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
         </a>
         {/* <a href={thirdPlatform} target="_blank" rel="noopener noreferrer">
            {renderThirdPlatformIcon()}
            {thirdPlatformType.charAt(0).toUpperCase() + thirdPlatformType.slice(1)}
         </a> */}
        </div>
    );
}
export default Footer;
