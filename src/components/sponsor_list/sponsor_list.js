import React from 'react';
import ReactDOM from 'react-dom/client';
import './sponsor_list.css';
import sponsor_list from './sponsor_list.png'

function Sponsor_List(props) {
  return (
    <div>
      <img id = "sponsor_list" src = {sponsor_list}></img>
    </div>
  );
}

export default Sponsor_List;
 