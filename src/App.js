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
            <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone" id="s01" />
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

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <header className="mdc-typography--headline2 title">
                    Interwebs:
                    <br/>
                    <br/>
                    <a className="title-link" href="mailto:evanmachale@gmail.com" target="_new">Email</a>
                    <br/>
                    <a className="title-link" href="https://glitch.com/@larryzodiac" target="_new">Glitch</a>
                    <br/>
                    <a className="title-link" href="https://github.com/larryzodiac/" target="_new">Github</a>
                    <br/>
                    <a className="title-link" href="https://www.linkedin.com/in/evanmachale/" target="_new">LinkedIn</a>
                    <br/>
                    <a className="title-link" href="https://larryzodiac-creative-coding.glitch.me/" target="_new">Experiments</a>
                  </header>
                </div>
              </div>

            </div>
            <div className="mdc-layout-grid__cell--span-5-desktop mdc-layout-grid__cell--span-1-tablet" />
          </div>
        </div>

        {/*
          Section 1
          Generative Jewellery
        */}

        <div className="mdc-layout-grid section-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-2" />
            <div className="mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <aside className="col-12">FILE > 1/8 ... [UNDER CONSTRUCTION]</aside>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <header className="mdc-typography--headline2 showcase-titles">Generative Jewellery<span> // Algorithmic and generative design for 3D printed jewellery.</span></header>
                </div>
              </div>

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">React, Three, MongoDB, Express, Node, Material</p>
                  <br />
                  <br />
                  <a className="visit" href="https://larryzodiac.github.io/generative-jewellery-demo/" target="new">Visit Demo >></a>
                  <br />
                  <br />
                  <a className="visit" href="https://github.com/larryzodiac/generative-jewellery" target="new">Visit Project >></a>
                  <br />
                  <br />
                  <a className="visit" href="https://generative-jewellery-mern.herokuapp.com/" target="new">Visit Full-Stack >></a>
                </div>
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">Final year research project. Below is the demo build for the core functionalities of the project. See the adjacent links for more information.<br /><br />This project seeks to investigate existing subdivision surface algorithms and data structures for the purpose of creating computer generated jewellery from basic shapes in a three-dimensional, browser environment. This jewellery is structured and manipulated by a set of weights defined by constants in the algorithm equations. The shape of the jewellery is determined by the effect of these weights on the properties of the source shape.</p>
                </div>
              </div>

              <br />
              <br />
              <br />

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone" id="typography">
                  <iframe className="iframe" title="iframe" src="https://larryzodiac.github.io/generative-jewellery-demo/"></iframe>
                </div>
              </div>

            </div>
            <div className="mdc-layout-grid__cell--span-2" />
          </div>
        </div>

        {/*
          Section 2
          Creative Coding Portfolio
        */}

        <div className="mdc-layout-grid section-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-2" />
            <div className="mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <aside className="col-12">FILE > 2/8 ...</aside>
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
                  <p className="mdc-typography--body1">Final year Creative Coding module assessment 3.<br /><br />This project is a personal portfolio website for displaying individual assessments and learning outcomes conducted throughout the year.</p>
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
          Section 3
          Parametric Posters
        */}

        <div className="mdc-layout-grid section-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-2" />
            <div className="mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <aside className="col-12">FILE > 3/8 ...</aside>
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
                  <a className="visit" href="https://larryzodiac-creative-coding.glitch.me/" target="new">Visit Creative Coding Portfolio >></a>
                </div>
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">Final year Creative Coding module assessment 2. This project is featured on the creative coding portfolio site<br /><br />Using creative/generative coding principles, design and code a set of posters for a generative design event. This project paired parametric mathematics with trigonometric functions and implemented different types of linear colour interpolations.</p>
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
          Section 2
          Type on Canvas
        */}

        <div className="mdc-layout-grid section-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-2" />
            <div className="mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <aside className="col-12">FILE > 4/8 ...</aside>
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
                  <p className="mdc-typography--body1">Final year Creative Coding module assessment 1. This project is featured on the creative coding portfolio site<br /><br />Develop an interactive typography playground with generative controls. The assessment draws shapes based on a grid overlain with the typed text. User inputted text updates the grid and translates shapes using interpolation.</p>
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
                  <aside className="col-12">FILE > 5/8 ...</aside>
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
                  <br />
                  <br />
                  <a className="visit" href="https://github.com/larryzodiac/pokedex/blob/master/report/README.md" target="new">Visit Report >></a>
                </div>
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">Final year Advanced JavaScript module assessment 1.<br /><br />Using an API and front-end framework, develop a web application with React.<br /><br />The project implements declarative routing with React Router, Axios API requests, Sass and Google's Material design components for React.</p>
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
                  <aside className="col-12">FILE > 6/8 ....</aside>
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
                  <br />
                  <br />
                  <a className="visit" href="https://github.com/larryzodiac/mern/blob/master/report/README.md" target="new">Visit Report >></a>
                </div>
                <div className="mdc-layout-grid__cell--span-6">
                  <br />
                  <p className="mdc-typography--body1">Final year Advanced JavaScript module assessment 2.<br /><br />Develop a full web application stack using MongoDB, Express, React and Node (MERN). This project was an attempt to mimic Medium, an online publishing platform.<br /><br />The project implements Passport authentication, declarative routing with React Router, Axios/Express API requests to custom MongoDB Atlas collections, Sass and Google's Material design components for React. All bundled with Webpack.</p>
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
                  <aside className="col-12">FILE > 7/8 ...</aside>
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
                  <p className="mdc-typography--body1">Third year research project. Below is the demo build for the core functionalities of the project.<br/><br/>This project sought to investigate how to render WebGL meshes with dynamically updated textures in Three. The result was a sngle page playgorund where users could choose colours for certain sections of an svg, which was then mapped to a geometry.</p>
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
                  <aside className="col-12">FILE > 8/8 ...</aside>
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
                  <p className="mdc-typography--body1">Third year Web Application Frameworks project assessment 2.<br/><br/></p>
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
