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

        {/*
          Section 0
          Title
        */}

        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-2-desktop mdc-layout-grid__cell--span-1-tablet" />
            <div className="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-6-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <header className="mdc-typography--headline2 title">
                    Kildare based fourth-<br/>year computing student, currently studying at<br/>Dún Laoghaire's<br/><a href="http://www.iadt.ie/courses/creative-computing" className="title-link" target="_new">Institute of Art, Design,<br/>&amp; Technology.</a><br/><br/>I wait tables, paint <a href="https://www.forgeworld.co.uk/Gallery" className="title-link" target="_new">Warhammer</a> &amp; pursue<br/>my dream of a career in<br/>user experience-<br/>interaction design.
                  </header>
                </div>
              </div>

            </div>
            <div className="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-1-tablet" />
          </div>
        </div>

        {/*
          Section 1
          Parametric Posters
        */}

        <div className="mdc-layout-grid section-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-2" />
            <div className="mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <aside className="col-12">FILE > 1/4 ...</aside>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <header className="mdc-typography--headline2 showcase-titles">Parametric Posters<span> // Creative coding for print with generative design.</span></header>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">p5.js</p>
                  <br />
                  <a className="visit" href="https://larryzodiac-creative-coding.glitch.me/" target="new">Visit Project >></a>
                </div>
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">description</p>
                </div>
              </div>

              <br />
              <br />
              <br />

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-4-phone">
                  <img className="img" alt="" src="https://raw.githubusercontent.com/larryzodiac/creative-coding/master/src/course/01_assignment/01_stills/190416_180336_730_Colour1__rgba(69%2C58%2C148%2C1)_Colour2__rgba(244%2C59%2C71%2C1).png"></img>
                </div>
                <div className="mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-4-phone">
                  <img className="img" alt="" src="https://raw.githubusercontent.com/larryzodiac/creative-coding/glitch/src/course/01_assignment/01_stills/181129_213252_388_Colour1__rgba(59%2C0%2C255%2C1)_Colour2__rgba(0%2C48%2C255%2C1).png"></img>
                </div>
                <div className="mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-4-phone">
                  <img className="img" alt="" src="https://raw.githubusercontent.com/larryzodiac/creative-coding/glitch/src/course/01_assignment/01_stills/181129_220652_68_Colour1__rgba(0%2C0%2C0%2C1)_Colour2__rgba(41%2C41%2C51%2C1).png"></img>
                </div>
              </div>

            </div>
            <div className="mdc-layout-grid__cell--span-2" />
          </div>
        </div>

        {/*
          Section 3
          Creative Coding Portfolio
        */}

        <div className="mdc-layout-grid section-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-2" />
            <div className="mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <aside className="col-12">FILE > 1/4 ...</aside>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <header className="mdc-typography--headline2 showcase-titles">Creative Coding Portfolio<span> // Personal gallery of creative JavaScript experiments.</span></header>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">React, p5.js</p>
                  <br />
                  <a className="visit" href="https://larryzodiac-creative-coding.glitch.me/" target="new">Visit Project >></a>
                </div>
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">description</p>
                </div>
              </div>

              <br />
              <br />
              <br />

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone" id="typography">
                  <iframe className="iframe" title="iframe" src="https://larryzodiac-creative-coding.glitch.me/"></iframe>
                </div>
              </div>

            </div>
            <div className="mdc-layout-grid__cell--span-2" />
          </div>
        </div>

        {/*
          Section 2
          Type on Canvas
        */}

        <div className="mdc-layout-grid section-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-2" />
            <div className="mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <aside className="col-12">FILE > 1/4 ...</aside>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <header className="mdc-typography--headline2 showcase-titles">Type on Canvas<span> // Generative typography experiments with Javascript in the browser.</span></header>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">p5.js</p>
                  <br />
                  <a className="visit" href="https://larryzodiac.github.io/creative-coding/src/course/02_assignment/02.2/" target="new">Visit Project >></a>
                </div>
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">description</p>
                </div>
              </div>

              <br />
              <br />
              <br />

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone" id="typography">
                  <iframe className="iframe" title="iframe" src="https://larryzodiac.github.io/creative-coding/src/course/02_assignment/02.2/"></iframe>
                </div>
              </div>

            </div>
            <div className="mdc-layout-grid__cell--span-2" />
          </div>
        </div>

        {/*
          Section 4
          Pokédex
        */}

        <div className="mdc-layout-grid section-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-2" />
            <div className="mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <aside className="col-12">FILE > 1/4 ...</aside>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <header className="mdc-typography--headline2 showcase-titles">Pokédex<span> // My first React application with Material Components and the Poké API.</span></header>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">React, Material Components</p>
                  <br />
                  <a className="visit" href="https://larryzodiac.github.io/pokedex/#/" target="new">Visit Project >></a>
                </div>
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">description</p>
                </div>
              </div>

              <br />
              <br />
              <br />

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone" id="typography">
                  <iframe className="iframe" title="iframe" src="https://larryzodiac.github.io/pokedex/#/"></iframe>
                </div>
              </div>

            </div>
            <div className="mdc-layout-grid__cell--span-2" />
          </div>
        </div>

        {/*
          Section 4
          MERN
        */}

        <div className="mdc-layout-grid section-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-2" />
            <div className="mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <aside className="col-12">FILE > 1/4 ...</aside>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <header className="mdc-typography--headline2 showcase-titles">MERN<span> // Full stack application with logins & CRUD functionalities.</span></header>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">React, MongoDB, Express, Node, Material Components</p>
                  <br />
                  <a className="visit" href="https://larryzodiac-mern.glitch.me/" target="new">Visit Project >></a>
                </div>
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">description</p>
                </div>
              </div>

              <br />
              <br />
              <br />

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone" id="typography">
                  <iframe className="iframe" title="iframe" src="https://larryzodiac-mern.glitch.me/"></iframe>
                </div>
              </div>

            </div>
            <div className="mdc-layout-grid__cell--span-2" />
          </div>
        </div>

        {/*
          Section 4
          Teamwear
        */}

        <div className="mdc-layout-grid section-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-2" />
            <div className="mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <aside className="col-12">FILE > 3/4 ... [MY FIRST PROJECT]</aside>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <header className="mdc-typography--headline2 showcase-titles">Teamwear<span> // Bringing 3D sports kits customisation to the web via WebGL.</span></header>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">Three.js, jQuery, Laravel</p>
                  <br />
                  <a className="visit" href="https://larryzodiac.github.io/3D-Kit-Designer/kit_builder/" target="new">Visit Project >></a>
                </div>
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">description</p>
                </div>
              </div>

              <br />
              <br />
              <br />

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone" id="typography">
                  <iframe className="iframe" title="iframe" src="https://larryzodiac.github.io/3D-Kit-Designer/kit_builder/"></iframe>
                </div>
              </div>

            </div>
            <div className="mdc-layout-grid__cell--span-2" />
          </div>
        </div>

        {/*
          Section 4
          Bookstore
        */}

        <div className="mdc-layout-grid section-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-2" />
            <div className="mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <aside className="col-12">FILE > 3/4 ...</aside>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <header className="mdc-typography--headline2 showcase-titles">Bookstore<span> // Utilizing web frameworks to create a CRUD database application.</span></header>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">Laravel, Vue.js, MySql</p>
                  <br />
                  <a className="visit" href="https://github.com/larryzodiac/Web-Application-Frameworks" target="new">Visit Code >></a>
                </div>
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">description</p>
                </div>
              </div>

              <br />
              <br />
              <br />

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone" id="typography">
                  <img className="img" alt="" src="https://larryzodiac.github.io/Web-Application-Frameworks/images/read.png"></img>
                </div>
              </div>

            </div>
            <div className="mdc-layout-grid__cell--span-2" />
          </div>
        </div>

        {/*
          Section NA
          Footer
        */}

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
