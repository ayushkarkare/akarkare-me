import React from 'react';
import './Sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function SideNav() {
  const navItems = [
    { number: '00', text: 'About', sectionId: 'about' },
    { number: '01', text: 'Projects', sectionId: 'projects' },
    { number: '02', text: 'Gallery', sectionId: 'gallery' },
    { number: '03', text: 'Resume', sectionId: 'resume' },
    { number: '04', text: 'Contact', sectionId: 'contact' },
  ];

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="side-nav">
      <ul>
        {navItems.map((item) => (
          <li key={item.number}>
            <div 
              className={`nav-item nav-item-${item.number}`} 
              onClick={() => handleNavClick(item.sectionId)}
            >
              <span className={`nav-number nav-number-${item.number}`}>{item.number}</span>
              <span className={`nav-text nav-text-${item.number}`}>{item.text}</span>
            </div>
          </li>
        ))}
      </ul>

      
      <div className="social-icons-container">
      <div className="social-icons">
            <a href="https://linkedin.com/in/ayushkarkare" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/ayushkarkare" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:akarkare@purdue.edu">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
      </div>
    </div>
  );
}

export default SideNav;