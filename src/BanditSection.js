import React, { Component } from 'react';
import './App.css';
import './css/main.css'
import './css/noscript.css'
import './css/font-awesome.min.css'

class BanditSection extends Component {
  componentDidMount(){

  }
  componentWillUnmount(){
  }
  render() {
    return (
      <section className={ 'style1 '
        + this.props.sectionType +
        ' ' + this.props.sectionOrientation +
        ' ' + this.props.sectionAlignment +
        ' ' + this.props.imagePosition +
        ' ' + this.props.screenFill +
        ' ' + this.props.fadeStyle
      }>
        <div className="content">
        {
          this.props.banditSectionContent
        }
        </div>
        <div className="image">
        {
          this.props.sectionType === "banner"
          ? <img src="images/banner.jpg" alt="" />
          : <img src={"images/spotlight"+this.props.sectionIteration+".jpg"} alt="" />
        }
        </div>
      </section>
    );
  }
}

export default BanditSection;
