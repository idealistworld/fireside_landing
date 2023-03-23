import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './fireside_text_logo.png'
import './footer.css';
import White_Button from '../white_button/white_button';

function Footer() {
  return (
    <div id = "footer_container">
      <span className = "footer_link">Contact</span>
      <span className = "footer_link">Partner</span>
      <span className = "footer_link">Connect</span>
    </div>
  );
}

export default Footer;
