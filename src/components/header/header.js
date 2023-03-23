import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './fireside_text_logo.png'
import './header.css';
import White_Button from '../white_button/white_button';

function Header() {
  return (
    <div id='header-container'>
      <img id='header_logo' src={logo}></img>
      <div id = "header_right_side">
        <h1 class = "header_link">Events</h1>
        <h1 class = "header_link">Contact</h1>
        <White_Button button_title="Login" className = "landing_header_button"></White_Button>
      </div>
    </div>
  );
}

export default Header;
