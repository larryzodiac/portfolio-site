/*
  Evan MacHale - N00150552
  25.03.19
  App.js
*/

import React, { Component } from 'react';
import './App.scss';
import './clock';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main>

        <div className="mdc-layout-grid heading">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone" id="s02" />
          </div>
        </div>

        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-1" />
            <div className="mdc-layout-grid__cell--span-10-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <i><header className="prelude center mdc-typography--body1">Parametric mathematics inspired by the work of <a className="prelude-link" href="https://www.youtube.com/watch?v=ZrKgyY5aDvA&feature=youtu.be&t=491" target="_new">John Whitney.</a></header></i>
                </div>
              </div>

            </div>
            <div className="mdc-layout-grid__cell--span-1" />
          </div>
        </div>

        <div className="mdc-layout-grid footer">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-1" />

            <div className="mdc-layout-grid__cell--span-10-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-6">
                  <p className="mdc-typography--headline4">I'm an aspiring developer and interaction designer studying a B.Sc [Hons] in Creative-Computing in Dún Laoghaire's IADT. At the moment I'm researching generative and algorithmic design for creating web applications in react and three.</p>
                  <p className="mdc-typography--headline4">Thanks for reading.</p>
                </div>
                <div className="mdc-layout-grid__cell--span-6">
                  <p className="mdc-typography--headline4">Interwebs:<br/><a href="mailto:evanmachale@gmail.com">E-mail</a><br/><a href="https://github.com/larryzodiac/" target="_new">Github</a><br/><a href="https://github.com/larryzodiac/portfolio-site" target="_new">Portfolio</a><br/><a href="https://glitch.com/@larryzodiac" target="_new">Glitch</a><br/><a href="https://twitter.com/evanmachale/" target="_new">Twitter</a></p>
                  <p className="mdc-typography--headline4" id="clock"></p>
                  <p className="mdc-typography--headline4" id="date"></p>
                </div>
              </div>

            </div>
            <div className="mdc-layout-grid__cell--span-1" />
          </div>
        </div>

      </main>
    );
  }
}

export default App;
