import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './fireside_text_logo.png'
import './footer.css';
import White_Button from '../white_button/white_button';

function Footer() {
  return (
    <div id = "footer_container">
      <a href = "https://www.linkedin.com/company/firesidefellows"><span className = "footer_link">LinkedIn</span></a>
      <a href = "https://www.instagram.com/fireside.bio/"><span className = "footer_link">Instagram</span></a>
      <a href = "https://twitter.com/FiresideBio"><span className = "footer_link">Twitter</span></a>
    </div>
  );
}

export default Footer;
