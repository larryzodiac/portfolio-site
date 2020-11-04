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
  Button,
  Caption,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Overline,
  Subtitle1,
  Subtitle2,
} from '@material/react-typography';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
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
                I’m a graduate software engineer with a B.Sc in <a href="http://www.iadt.ie/courses/creative-computing" className="title-link" target="_new">Creative Computing</a> from <i>Dún Laoghaire’s Institute of Art, Design &amp; Technology</i>, followed by a MA in <a href="https://www.ncad.ie/postgraduate/school-of-design/ma-interaction-design/" className="title-link" target="_new">Human—computer Interaction Design</a> from <i>Ireland’s National College of Art &amp; Design</i>.
              </Headline2>
            </Cell>
            <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1} />
          </Row>
          <Row className="section">
            <Cell desktopColumns={2} phoneColumns={0} tabletColumns={1} />
            <Cell desktopColumns={7} phoneColumns={4} tabletColumns={6}>
              <Headline2 className="title">
                Interwebs:
                <br/>
                <br/>
                <a className="title-link" href="https://drive.google.com/file/d/18I4C9KcP6Yakb7LMTUILuk2teta1yQZb/view" target="_new">CV</a>
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
                  <aside>FILE &gt; 1/8 ... [UNDER CONSTRUCTION]</aside>
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

        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
