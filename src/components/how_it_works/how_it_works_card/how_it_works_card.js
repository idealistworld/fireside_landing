import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './how_it_works_card.css';
import People from './people_icon.png'

function How_It_Works_Card(props) {

  return (
    <div id="how_it_works_card_container">
      <img src={People} id="card_icon"></img>
      <h1 id="how_it_works_title_card_title">{props.title}</h1>
      <p id="how_it_works_title_card_paragraph">
        {props.paragraph}
      </p>
    </div>
  );
}

export default How_It_Works_Card;