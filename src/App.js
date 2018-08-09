import React, { Component } from 'react';
import './App.css';
import BanditSection from './BanditSection.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BanditSection
          banditSectionContent={
            <div><h1>Story1</h1>
            <p class="major">A (modular, highly tweakable) responsive one-page template designed by <a href="https://html5up.net">HTML5 UP</a> and released for free under the <a href="https://html5up.net/license">Creative Commons</a>.</p>
            <ul class="actions stacked">
              <li><a href="#first" class="button big wide smooth-scroll-middle">Get Started</a></li>
            </ul>
          </div>
        }
        sectionType='banner style1'
        sectionOrientation='orient-left'
        sectionAlignment='content-align-left'
        imagePosition='image-position-left'
        screenFill='fullscreen'
        fadeStyle='onload-image-fade-in onload-content-fade-right'
        >
        </BanditSection>
        {
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
