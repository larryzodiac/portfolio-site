/*
  02/11/2020
  App.js
*/

import React from 'react';
import './App.scss';
import './clock';
// Material
import {Cell, Grid, Row} from '@material/react-layout-grid';

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
          <Row>
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>Hello</Cell>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
