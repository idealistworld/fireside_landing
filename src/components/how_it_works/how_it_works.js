import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './how_it_works.css';
import How_It_Works_Card from './how_it_works_card/how_it_works_card';

function How_It_Works(props) {

  const [card_title, set_card_title] = useState("This is First");
  const [card_paragraph, set_card_paragraph] = useState("First.  This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it.");

  function scrollView() {
    const mainRoot = document.getElementById("sponsor_list");
    mainRoot.scrollIntoView({ behavior: "smooth" });
  }

  const card1 = () => {
    set_card_title("This is First")
    set_card_paragraph("First.  This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it.")
    scrollView() 
    document.querySelector(".how_it_works_selector1").style.color = "black"
    document.querySelector(".how_it_works_selector2").style.color = "#838383"
    document.querySelector(".how_it_works_selector3").style.color = "#838383"
    document.querySelector(".how_it_works_selector4").style.color = "#838383"
  }

  const card2 = () => {
    set_card_title("This is Second")
    set_card_paragraph("Second.  This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it.")
    scrollView() 
    document.querySelector(".how_it_works_selector1").style.color = "#838383"
    document.querySelector(".how_it_works_selector2").style.color = "black"
    document.querySelector(".how_it_works_selector3").style.color = "#838383"
    document.querySelector(".how_it_works_selector4").style.color = "#838383"
  }

  const card3 = () => {
    set_card_title("This is Third")
    set_card_paragraph("Third.  This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it.")
    scrollView() 
    document.querySelector(".how_it_works_selector1").style.color = "#838383"
    document.querySelector(".how_it_works_selector2").style.color = "#838383"
    document.querySelector(".how_it_works_selector3").style.color = "black"
    document.querySelector(".how_it_works_selector4").style.color = "#838383"
  }

  const card4 = () => {
    set_card_title("This is Fourth")
    set_card_paragraph("Fourth.  This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it.")
    scrollView() 
    document.querySelector(".how_it_works_selector1").style.color = "#838383"
    document.querySelector(".how_it_works_selector2").style.color = "#838383"
    document.querySelector(".how_it_works_selector3").style.color = "#838383"
    document.querySelector(".how_it_works_selector4").style.color = "black"
  }

  return (
    <div id="how_it_works_container">
      <div id="how_it_works_left">
        <h1 id="how_it_works_title">How It Works</h1>
        <p id="how_it_works_paragraph">
          This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it.
        </p>
        <div className='how_it_works_selector how_it_works_selector1' onClick={card1}>
          01. This is the first type of question
        </div>
        <div className='how_it_works_selector how_it_works_selector2' onClick={card2}>
          02. This is the second type of question
        </div>
        <div className='how_it_works_selector how_it_works_selector3' onClick={card3}>
          03. This is the third type of question
        </div>
        <div className='how_it_works_selector how_it_works_selector4' onClick={card4}>
          04. This is the fourth type of question
        </div>
      </div>
      <div id="how_it_works_right">
        <How_It_Works_Card title={card_title} paragraph={card_paragraph} id="how_it_works_card"></How_It_Works_Card>
      </div>
    </div>
  );
}

export default How_It_Works;