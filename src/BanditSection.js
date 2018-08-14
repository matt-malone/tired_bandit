import React, { Component } from 'react';
import './App.css';
import './css/main.css'
import './css/noscript.css'
import './css/font-awesome.min.css'
import handleViewport from 'react-in-viewport';

class BanditSection extends Component {
  componentDidMount(){

  }
  componentWillUnmount(){
  }
  render(props: { inViewport: boolean }) => {
    const { inViewport, innerRef } = props;
    return (
      <section className={
        this.props.sectionType + 'viewport-block style1 ' +
        ' ' + this.props.sectionOrientation +
        ' ' + this.props.sectionAlignment +
        ' ' + this.props.imagePosition +
        ' ' + this.props.screenFill +
        ' ' + this.props.inViewport ? this.props.fadeStyle : ''
      } ref={innerRef}>
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
