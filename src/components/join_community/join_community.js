import React from 'react';
import ReactDOM from 'react-dom/client';
import './join_community.css';
import Community_Section_Blurb from './community_section_blurb/community_section_blurb'
import Fireside from './fireside.png'

function Join_Community(props) {
  return (
    <div id="join_community_container">
      <div id = "community-flex-container">
        <h1 id="community_title">Join the Community</h1>
        <div id="commmunity_stats_container">
          <p className="community_stats">Enrolled Students: <span className="community_stats_metric">100+</span></p>
          <p className="community_stats">Universities Globally: <span className="community_stats_metric">30+</span></p>
        </div>
        <div id="community_blurb_container">
          <img className="community_section_blurb_container" id="fireside_community_photo" src={Fireside}></img>
          <Community_Section_Blurb button_title="Apply Now" title="Fireside Fellows" paragraph="This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that."></Community_Section_Blurb>
          <Community_Section_Blurb button_title="Join the Slack" title="Our Socials" paragraph="This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that."></Community_Section_Blurb>
          <Community_Section_Blurb button_title="Contact Us" title="Let's Collaborate" paragraph="This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that."></Community_Section_Blurb>
        </div>
      </div>
    </div>
  );
}

export default Join_Community;