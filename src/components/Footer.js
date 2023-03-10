import React from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/')}/>
            <GitHubIcon onClick={() => window.open('https://github.com/')}/>
            <EmailIcon onClick={() => window.location = 'mailto:devikak475@gmail.com'}/>
        </div>
    </div>
  )
}

export default Footer