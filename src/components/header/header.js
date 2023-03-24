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
        <a href = "http://fireside.bio/"><h1 class = "header_link">Events</h1></a>
        <a href = "https://gmail.com/"><h1 class = "header_link">Contact</h1></a>
        <White_Button button_title="Login" button_type="Login"></White_Button>
      </div>
    </div>
  );
}

export default Header;
