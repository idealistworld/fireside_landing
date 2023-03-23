import React from 'react';
import ReactDOM from 'react-dom/client';
import './community_section_blurb.css';
import White_Button from '../../white_button/white_button';

function Community_Section_Blurb(props) {
  return (
    <div className="community_section_blurb_container">
      <h1>{props.title}</h1>
      <p>
        {props.paragraph}
      </p>
      <White_Button button_title = {props.button_title}></White_Button>
    </div>
  );
}

export default Community_Section_Blurb;