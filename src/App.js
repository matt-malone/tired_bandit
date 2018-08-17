import React, { Component } from 'react';
import './App.css';
import './css/main.css'
import './css/noscript.css'
import './css/font-awesome.min.css'
import BanditSection from './BanditSection.js'
import BrowserDetection from 'detect-browser'
// import ReactDOM from 'react-dom'
// import LazyLoad from 'react-lazyload'
// import { Spring } from 'react-spring'
// import { Transition } from 'react-spring'
import { Parallax, ParallaxLayer } from 'react-spring'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      viewCount:0,
      leaveCount:0,
      viewCount2:0,
      leaveCount2:0
    };
  }
  render() {
    const browser = BrowserDetection.detect();

    return (
      <div className="App">
          <BanditSection
              banditSectionContent={
                <div><h1>{browser.name + '-' + browser.version}</h1>
                <p className="major">A (modular, highly tweakable) responsive one-page template designed by <a href="https://html5up.net">HTML5 UP</a> and released for free under the <a href="https://html5up.net/license">Creative Commons</a>.</p>
                <ul className="actions stacked">
                  <li><a href="#first" className="button big wide smooth-scroll-middle">Get Started</a></li>
                </ul>
              </div>
            }
            sectionType='banner'
            sectionOrientation='orient-left'
            sectionAlignment='content-align-left'
            imagePosition='image-position-left'
            screenFill='fullscreen'
            fadeStyle=''
            >
            </BanditSection>
            <BanditSection
                banditSectionContent={
                  <div><h1>{browser.name + '-' + browser.version}</h1>
                  <p className="major">A (modular, highly tweakable) responsive one-page template designed by <a href="https://html5up.net">HTML5 UP</a> and released for free under the <a href="https://html5up.net/license">Creative Commons</a>.</p>
                  <ul className="actions stacked">
                    <li><a href="#first" className="button big wide smooth-scroll-middle">Get Started</a></li>
                  </ul>
                </div>
              }
              sectionType='spotlight'
              sectionOrientation='orient-right'
              sectionAlignment='content-align-left'
              sectionIteration='1'
              imagePosition='image-position-center'
              screenFill='fullscreen'
              fadeStyle=''
              >
              </BanditSection>

{
//       <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
//     {styles => <div style={styles}>i will fade in</div>}
// </Spring>
//         <Spring from={{opacity:0}} to={{opacity:1}}>
//     {styles => <BanditSection
//       banditSectionContent={
//         <div><h1>{browser.name + '-' + browser.version}</h1>
//         <p className="major">A (modular, highly tweakable) responsive one-page template designed by <a href="https://html5up.net">HTML5 UP</a> and released for free under the <a href="https://html5up.net/license">Creative Commons</a>.</p>
//         <ul className="actions stacked">
//           <li><a href="#first" className="button big wide smooth-scroll-middle">Get Started</a></li>
//         </ul>
//       </div>
//     }
//     sectionType='banner'
//     sectionOrientation='orient-left'
//     sectionAlignment='content-align-left'
//     imagePosition='image-position-left'
//     screenFill='fullscreen'
//     fadeStyle=''
//     >
//     </BanditSection>}
//
//           </Spring>
//         <LazyLoad>
//           <BanditSection
//             banditSectionContent={
//               <div>
//   							<h2>Magna etiam feugiat</h2>
//   							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
//   							<ul className="actions stacked">
//   								<li><a href="#learnMore" className="button">Learn More</a></li>
//   							</ul>
//               </div>
//           }
//           sectionType='spotlight'
//           sectionIteration='02'
//           sectionOrientation='orient-left'
//           sectionAlignment='content-align-left'
//           screenFill=''
//           imagePosition='image-position-center'
//           fadeStyle='onscroll-image-fade-in'
//           >
//           </BanditSection>
//         </LazyLoad>
//         <LazyLoad><Transition
//       from={{ opacity: 0, height: 0 }}
//       enter={{ opacity: 1, height: 20 }}
//       leave={{ opacity: 0, height: 0, pointerEvents: 'none' }}>
//       {styles => <div style={styles}>i will fade in</div>}
//   </Transition></LazyLoad>
          // <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <h1 className="App-title">Welcome to React</h1>
        // </header>
        // <p className="App-intro">
        //   To get started, edit <code>src/App.js</code> and save to reload.
        // </p>
      }
      </div>
    );
  }
}

export default App;
