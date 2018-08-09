import React, { Component } from 'react';
import './App.css';
import './css/main.css'
import './css/noscript.css'
import './css/font-awesome.min.css'

class BanditSection extends Component {
  render() {
    return (
      <section class={ this.props.sectionType +
        ' ' + this.props.sectionOrientation +
        ' ' + this.props.sectionAlignment +
        ' ' + this.props.imagePosition +
        ' ' + this.props.screenFill +
        ' ' + this.props.fadeStyle
      }>
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
