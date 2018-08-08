import React, { Component } from 'react';
import './App.css';
import './css/main.css'
import './css/noscript.css'
import './css/font-awesome.min.css'

class BanditSection extends Component {
  render() {
    return (
      <section class='banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right'>
        <div class="content">
        {
          this.props.banditSectionContent
        }
        </div>
        <div class="image">
          <img src="images/banner.jpg" alt="" />
        </div>
      </section>
    );
  }
}

export default BanditSection;
