import React, { Component } from 'react';
import './App.css';
import './css/main.css';
import './css/noscript.css';
import './css/font-awesome.min.css';
import handleViewport from 'react-in-viewport';

// const BanditSection = (props) => {
//
//     return  <section className={
//         props.sectionType + ' viewport-block style1 ' +
//         ' ' + props.sectionOrientation +
//         ' ' + props.sectionAlignment +
//         ' ' + props.imagePosition +
//         ' ' + props.screenFill +
//         ' ' + props.inViewport ? props.fadeStyle : ''
//       }  ref={props.innerRef}>
//         <div className="content">
//         {
//           props.banditSectionContent
//         }
//         </div>x
//         <div className="image">
//         {
//           props.sectionType === "banner"
//           ? <img src="images/banner.jpg" alt="" />
//           : <img src={"images/spotlight"+props.sectionIteration+".jpg"} alt="" />
//         }
//         </div>
//       </section>
//
// };
class BanditSectionBlock extends Component {

  getStyle(){
    if(this.props.inViewport && this.props.viewCount === 1){
      return {"WebkitTransition": "opacity 0.75s ease-in-out"};
    }
    else if(!this.props.inViewport && this.props.viewCount < 1){
      return {"WebkitTransition": "none", "opacity": "0"};
    }else{
     return {};
    }
  }
  render(){
    return (
        <section className={
          ' ' + this.props.sectionType +' style1 ' +
          ' ' + this.props.sectionOrientation +
          ' ' + this.props.sectionAlignment +
          ' ' + this.props.imagePosition +
          ' ' + this.props.screenFill
        }>
          <div className="content"  style={this.getStyle()}>
          {
            this.props.banditSectionContent
          }
          {this.props.myViewCount}
          {this.props.myLeaveCount}
          </div>
          <div className="image">
          {
              this.props.imageUrl ?  (<img src={this.props.imageUrl} alt="" />)
              : this.props.sectionType !== "banner" && this.props.sectionIteration ? (<img src={"images/spotlight"+this.props.sectionIteration+".jpg"} alt="" />)
              : (<img src="images/banner.jpg" alt="" />)
          }
          </div>
        </section>
    );
  };
};
const BanditSection = handleViewport(BanditSectionBlock, {rootMargin:"-1.0px"});

export default BanditSection;
