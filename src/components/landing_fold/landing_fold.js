import React from 'react';
import ReactDOM from 'react-dom/client';
import './landing_fold.css';
import ComputerScreen from './computer_screen.png'
import White_Button from '../white_button/white_button';

function Landing_Fold(props) {
  function scrollView() {
    alert("asdf")
  }

  return (
    <div id="landing_fold_container">
      <div id="landing_fold_left">
        <h1 id="landing_title_text">
          <span Style="font-weight: 800">Uncover</span> the world
          <br></br> of<span Style="font-weight: 800">Venture Capital</span>
          <span id="title_subtext">*while still having fun</span>
        </h1>
        <div id="landing_fold_buttons">
          <White_Button id="signup_button" button_type='landing_fold' button_title="Sign Up"></White_Button>
          <White_Button id="how_it_works" button_type='landing_fold' button_title="How it Works"></White_Button>
        </div>
        <p id="landing_fold_paragraph">This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. </p>
      </div>
      <img className="computer_screen" src={ComputerScreen}>
      </img>
    </div>
  );
}

export default Landing_Fold;