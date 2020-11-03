/*
  02/11/2020
  App.js
*/

import React from 'react';
import './App.scss';
// Material
import {Cell, Grid, Row} from '@material/react-layout-grid';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Grid className="grid">
        <b>yousag</b>
      </Grid>
    );
  }
}

export default App;
