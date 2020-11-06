/*
  02/11/2020
  App.js
*/

import React from 'react';
import './App.scss';
import './clock';
// Material
import { Cell, Grid, Row } from '@material/react-layout-grid';
import {
  Body1,
  Body2,
  Headline2,
  Headline4,
} from '@material/react-typography';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="sketch" id="s01"></div>
        <Grid className="grid">
          {/*Info*/}
          <Row className="section">
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
            <Cell desktopColumns={7} phoneColumns={4} tabletColumns={6}>
              <Headline2 className="title">
                I’m a <b className="blue title">graduate software engineer</b> with a B.Sc in <a href="http://www.iadt.ie/courses/creative-computing" className="title-link" target="_new">Creative Computing</a> from <i>Dún Laoghaire’s IADT</i>, followed by a MA in <a href="https://www.ncad.ie/postgraduate/school-of-design/ma-interaction-design/" className="title-link" target="_new">Human—computer Interaction Design</a> from <i>Ireland’s NCAD</i>.
              </Headline2>
              <br/>
              <Headline2 className="title">
                I'm <i className="blue">multidisciplinary*</i>, with modern OOP, full-stack &amp; <a href="https://www.designkit.org/" className="title-link" target="_new">HCD</a> practices, technologies &amp; languages.
              </Headline2>
              <Body2 className="underline">
                *Java, SQL, <b className="blue">ES6 JavaScript</b>, p5, Three, jQuery, R, d3, Laravel, Vue, Node, MongoDB, <b className="blue">React</b>, Express &amp; Python.
              </Body2>
              <Body2 className="underline">
                *HCD, Service Design, UX, User Research, Journey Mapping, Prototyping, <b className="blue">Figma</b>, Adobe, Protopie, Heuristics, Flows, Grids, Type &amp; Patterns.
              </Body2>
            </Cell>
            <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1} />
          </Row>
          <Row className="section">
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
            <Cell desktopColumns={7} phoneColumns={4} tabletColumns={6}>
              <Headline2 className="title">
                <b className="blue title">Interwebs:</b>
                <br />
                <br />
                <a className="title-link" href="https://drive.google.com/file/d/18I4C9KcP6Yakb7LMTUILuk2teta1yQZb/view" target="_new">CV</a>
                <br />
                <a className="title-link" href="mailto:evanmachale@gmail.com" target="_new">Email</a>
                <br />
                <a className="title-link" href="https://glitch.com/@larryzodiac" target="_new">Glitch</a>
                <br />
                <a className="title-link" href="https://github.com/larryzodiac/" target="_new">Github</a>
                <br />
                <a className="title-link" href="https://www.linkedin.com/in/evanmachale/" target="_new">LinkedIn</a>
                <br />
                <a className="title-link" href="https://larryzodiac-creative-coding.glitch.me/" target="_new">Experiments</a>
              </Headline2>
            </Cell>
            <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1} />
          </Row>

          {/*
            Section 1
            Generative Jewellery
          */}

          <Row className="section">
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
            <Cell desktopColumns={8} phoneColumns={4} tabletColumns={6}>
              <Row>
                <Cell columns={12}>
                  <aside>FILE &gt; 1/7 ... [UNDER CONSTRUCTION]</aside>
                </Cell>
              </Row>
              <Row>
                <Cell columns={12}>
                  <Headline2 className="showcase-titles">Generative Jewellery<span> // Algorithmic and generative design for 3D printed jewellery.</span></Headline2>
                </Cell>
              </Row>
              <Row>
                <Cell columns={6}>
                  <br />
                  <Body1>React, Three, MongoDB, Express, Node, Material</Body1>
                  <br />
                  <br />
                  <a className="visit" href="https://larryzodiac.github.io/generative-jewellery-demo/" target="new">Visit Demo &gt;&gt;</a>
                  <br />
                  <br />
                  <a className="visit" href="https://github.com/larryzodiac/generative-jewellery" target="new">Visit Project &gt;&gt;</a>
                  <br />
                  <br />
                  <a className="visit" href="https://boiling-spire-12244.herokuapp.com/" target="new">Visit Full-Stack &gt;&gt;</a>
                  <br />
                  <br />
                  <a className="visit" href="https://drive.google.com/file/d/1hr9bTcNhdEXP6IG-CLm9kjdL6pqgwucb/view?usp=sharing" target="new">Visit Dissertation &gt;&gt;</a>
                </Cell>
                <Cell columns={6}>
                  <br />
                  <Body1>Final year research project. Below is the demo build for the core functionalities of the project. See the adjacent links for more information.<br /><br />This project seeks to investigate existing subdivision surface algorithms and data structures for the purpose of creating computer generated jewellery from basic shapes in a three-dimensional, browser environment. This jewellery is structured and manipulated by a set of weights defined by constants in the algorithm equations. The shape of the jewellery is determined by the effect of these weights on the properties of the source shape.</Body1>
                </Cell>
              </Row>

              <Row>
                <Cell columns={12}>
                  <iframe className="iframe" title="iframe" src="https://larryzodiac.github.io/generative-jewellery/"></iframe>
                </Cell>
              </Row>

            </Cell>
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
          </Row>

          {/*
            Section 2
            Creative Coding Portfolio
          */}

          <Row className="section">
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
            <Cell desktopColumns={8} phoneColumns={4} tabletColumns={6}>
              <Row>
                <Cell columns={12}>
                  <aside>FILE &gt; 2/7 ...</aside>
                </Cell>
              </Row>
              <Row>
                <Cell columns={12}>
                  <Headline2 className="showcase-titles">Creative Coding Portfolio<span> // Personal gallery of creative JavaScript experiments.</span></Headline2>
                </Cell>
              </Row>
              <Row>
                <Cell columns={6}>
                  <br />
                  <Body1>React, p5.js</Body1>
                  <br />
                  <br />
                  <a className="visit" href="https://larryzodiac-creative-coding.glitch.me/" target="new">Visit Project &gt;&gt;</a>
                </Cell>
                <Cell columns={6}>
                  <br />
                  <Body1>
                    Final year Creative Coding module assessment 3.<br /><br />This project is a personal portfolio website for displaying individual assessments and learning outcomes conducted throughout the year.
                  </Body1>
                </Cell>
              </Row>

              <Row>
                <Cell columns={12}>
                  <iframe className="iframe" title="iframe" src="https://larryzodiac-creative-coding.glitch.me/"></iframe>
                </Cell>
              </Row>

            </Cell>
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
          </Row>

          {/*
            Section 3
            Parametric Posters
          */}

          <Row className="section">
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
            <Cell desktopColumns={8} phoneColumns={4} tabletColumns={6}>
              <Row>
                <Cell columns={12}>
                  <aside>FILE &gt; 3/7 ...</aside>
                </Cell>
              </Row>
              <Row>
                <Cell columns={12}>
                  <Headline2 className="showcase-titles">Parametric Posters<span> // Creative coding for print with generative design.</span></Headline2>
                </Cell>
              </Row>
              <Row>
                <Cell columns={6}>
                  <br />
                  <Body1>p5.js</Body1>
                  <br />
                  <br />
                  <a className="visit" href="https://larryzodiac-creative-coding.glitch.me/" target="new">Visit Creative Coding Portfolio &gt;&gt;</a>
                </Cell>
                <Cell columns={6}>
                  <br />
                  <Body1>
                    Final year Creative Coding module assessment 2. This project is featured on the creative coding portfolio site<br /><br />Using creative/generative coding principles, design and code a set of posters for a generative design event. This project paired parametric mathematics with trigonometric functions and implemented different types of linear colour interpolations.
                  </Body1>
                </Cell>
              </Row>

              <Row>
                <Cell desktopColumns={4} phoneColumns={4} tabletColumns={4}>
                  <img className="img" alt="" src="https://raw.githubusercontent.com/larryzodiac/creative-coding/master/src/course/01_assignment/01_stills/190416_180336_730_Colour1__rgba(69%2C58%2C148%2C1)_Colour2__rgba(244%2C59%2C71%2C1).png"></img>
                </Cell>
                <Cell desktopColumns={4} phoneColumns={4} tabletColumns={4}>
                  <img className="img" alt="" src="https://raw.githubusercontent.com/larryzodiac/creative-coding/glitch/src/course/01_assignment/01_stills/181129_213252_388_Colour1__rgba(59%2C0%2C255%2C1)_Colour2__rgba(0%2C48%2C255%2C1).png"></img>
                </Cell>
                <Cell desktopColumns={4} phoneColumns={4} tabletColumns={4}>
                  <img className="img" alt="" src="https://raw.githubusercontent.com/larryzodiac/creative-coding/glitch/src/course/01_assignment/01_stills/181129_220652_68_Colour1__rgba(0%2C0%2C0%2C1)_Colour2__rgba(41%2C41%2C51%2C1).png"></img>
                </Cell>
              </Row>

            </Cell>
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
          </Row>

          {/*
            Section 4
            Pokédex
          */}

          <Row className="section">
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
            <Cell desktopColumns={8} phoneColumns={4} tabletColumns={6}>
              <Row>
                <Cell columns={12}>
                  <aside>FILE &gt; 4/7 ...</aside>
                </Cell>
              </Row>
              <Row>
                <Cell columns={12}>
                  <Headline2 className="showcase-titles">Pokédex<span> // My first React application with Material Components and the Poké API.</span></Headline2>
                </Cell>
              </Row>
              <Row>
                <Cell columns={6}>
                  <br />
                  <Body1>React, Material Components</Body1>
                  <br />
                  <br />
                  <a className="visit" href="https://larryzodiac.github.io/pokedex/#/" target="new">Visit Project &gt;&gt;</a>
                  <br />
                  <br />
                  <a className="visit" href="https://github.com/larryzodiac/pokedex/blob/master/report/README.md" target="new">Visit Report &gt;&gt;</a>
                </Cell>
                <Cell columns={6}>
                  <br />
                  <Body1>
                    Final year Advanced JavaScript module assessment 1.<br /><br />Using an API and front-end framework, develop a web application with React.<br /><br />The project implements declarative routing with React Router, Axios API requests, Sass and Google's Material design components for React.
                  </Body1>
                </Cell>
              </Row>

              <Row>
                <Cell columns={12}>
                  <iframe className="iframe" title="iframe" src="https://larryzodiac.github.io/pokedex/#/"></iframe>
                </Cell>
              </Row>

            </Cell>
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
          </Row>

          {/*
            Section 5
            MERN
          */}

          <Row className="section">
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
            <Cell desktopColumns={8} phoneColumns={4} tabletColumns={6}>
              <Row>
                <Cell columns={12}>
                  <aside>FILE &gt; 5/8 ...</aside>
                </Cell>
              </Row>
              <Row>
                <Cell columns={12}>
                  <Headline2 className="showcase-titles">MERN<span> // Full stack application with logins &amp; CRUD functionalities.</span></Headline2>
                </Cell>
              </Row>
              <Row>
                <Cell columns={6}>
                  <br />
                  <Body1>React, MongoDB, Express, Node, Material Components</Body1>
                  <br />
                  <br />
                  <a className="visit" href="https://larryzodiac-mern.glitch.me/" target="new">Visit Project &gt;&gt;</a>
                  <br />
                  <br />
                  <a className="visit" href="https://github.com/larryzodiac/mern/blob/master/report/README.md" target="new">Visit Report &gt;&gt;</a>
                </Cell>
                <Cell columns={6}>
                  <br />
                  <Body1>
                    Final year Advanced JavaScript module assessment 2.<br /><br />Develop a full web application stack using MongoDB, Express, React and Node (MERN). This project was an attempt to mimic Medium, an online publishing platform.<br /><br />The project implements Passport authentication, declarative routing with React Router, Axios/Express API requests to custom MongoDB Atlas collections, Sass and Google's Material design components for React. All bundled with Webpack.
                  </Body1>
                </Cell>
              </Row>

              <Row>
                <Cell columns={12}>
                  <iframe className="iframe" title="iframe" src="https://larryzodiac-mern.glitch.me/"></iframe>
                </Cell>
              </Row>

            </Cell>
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
          </Row>

          {/*
            Section 6
            Teamwear
          */}

          <Row className="section">
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
            <Cell desktopColumns={8} phoneColumns={4} tabletColumns={6}>
              <Row>
                <Cell columns={12}>
                  <aside>FILE &gt; 6/7 ...</aside>
                </Cell>
              </Row>
              <Row>
                <Cell columns={12}>
                  <Headline2 className="showcase-titles">Teamwear<span> // Bringing 3D sports kits customisation to the web via WebGL.</span></Headline2>
                </Cell>
              </Row>
              <Row>
                <Cell columns={6}>
                  <br />
                  <Body1>Three.js, jQuery, Laravel</Body1>
                  <br />
                  <br />
                  <a className="visit" href="https://larryzodiac.github.io/3D-Kit-Designer/kit_builder/" target="new">Visit Project &gt;&gt;</a>
                </Cell>
                <Cell columns={6}>
                  <br />
                  <Body1>
                    Third year research project. Below is the demo build for the core functionalities of the project.<br/><br/>This project sought to investigate how to render WebGL meshes with dynamically updated textures in Three. The result was a sngle page playgorund where users could choose colours for certain sections of an svg, which was then mapped to a geometry.
                  </Body1>
                </Cell>
              </Row>

              <Row>
                <Cell columns={12}>
                  <iframe className="iframe" title="iframe" src="https://larryzodiac.github.io/3D-Kit-Designer/kit_builder/"></iframe>
                </Cell>
              </Row>

            </Cell>
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
          </Row>

          {/*
            Section 7
            Bookstore
          */}

          <Row className="section">
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
            <Cell desktopColumns={8} phoneColumns={4} tabletColumns={6}>
              <Row>
                <Cell columns={12}>
                  <aside>FILE &gt; 7/7 ...</aside>
                </Cell>
              </Row>
              <Row>
                <Cell columns={12}>
                  <Headline2 className="showcase-titles">Bookstore<span> // Utilizing web frameworks to create a CRUD database application.</span></Headline2>
                </Cell>
              </Row>
              <Row>
                <Cell columns={6}>
                  <br />
                  <Body1>Laravel, Vue.js, MySql</Body1>
                  <br />
                  <br />
                  <a className="visit" href="https://github.com/larryzodiac/Web-Application-Frameworks" target="new">Visit Code &gt;&gt;</a>
                </Cell>
                <Cell columns={6}>
                  <br />
                  <Body1>
                    Third year Web Application Frameworks project assessment 2.<br/><br/>
                  </Body1>
                </Cell>
              </Row>

              <Row>
                <Cell columns={12}>
                  <img className="img bookstore" alt="" src="https://larryzodiac.github.io/Web-Application-Frameworks/images/read.png"></img>
                </Cell>
              </Row>

            </Cell>
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
          </Row>

          {/*
            Footer
          */}

          <Row className="footer">
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
            <Cell desktopColumns={8} phoneColumns={4} tabletColumns={6}>
              <Row className="footer-content">
                <Cell columns={6}>
                  <Headline4>
                    I'm an aspiring software engineer &amp; interaction designer. At the moment I'm enrolled in a networking course with the hopes of meeting new people and gaining new skills in my search for a software role.
                  </Headline4>
                  <Headline4>Thanks for reading.</Headline4>
                  <Headline4>Sláinte.</Headline4>
                </Cell>
                <Cell columns={6}>
                  <Headline4>
                    Interwebs:<br/>
                    <a href="https://drive.google.com/file/d/18I4C9KcP6Yakb7LMTUILuk2teta1yQZb/view" target="_new">CV</a><br/>
                    <a href="mailto:evanmachale@gmail.com">E-mail</a><br/>
                    <a href="https://github.com/larryzodiac/" target="_new">Github</a><br/>
                    <a href="https://github.com/larryzodiac/portfolio-site" target="_new">Portfolio</a><br/>
                    <a href="https://glitch.com/@larryzodiac" target="_new">Glitch</a><br/><a href="https://twitter.com/evanmachale/" target="_new">Twitter</a>
                  </Headline4>
                  <Headline4 id="clock" />
                  <Headline4 id="date" />
                </Cell>
              </Row>
            </Cell>
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
          </Row>

        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
