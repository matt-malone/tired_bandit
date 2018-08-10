import React, { Component } from 'react';
import './App.css';
import './css/main.css'
import './css/noscript.css'
import './css/font-awesome.min.css'

class BanditSection extends Component {
  isInViewPort(){
    var myDOM = ReactDOM.findDOMNode(this);
    var rect = myDOM.getBoundingClientRect();
    var elementTop = rect.offsetTop;
    var elementBottom = elementTop + rect.height;
    var viewportTop = myDOM.scrollTop;
    var viewportBottom = viewportTop + window.height;
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }
  componentDidMount(){

    this.interval = setInterval(() => {
      if ( this.state.scrolling ) {
        this.setState({
          scrolling: false
        });
        if(isInViewPort()){

        }
      }
    }, 250 );
  }
  componentWillUnmount(){
    clearInterval(this.interval);
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
