import React from 'react';
import ReactDOM from 'react-dom/client';
import './white_button.css';

function White_Button(props) {
  return (
    <button className = "white_button" id = {props.button_type}>{props.button_title}</button>
  );
}

export default White_Button;
 