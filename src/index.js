import React from 'react';
import ReactDOM from 'react-dom';
import p5 from 'p5';
import Seed from './components/sketch'
import Work from './components/work';
import Nav from './components/nav';
import Data from './assets/data';
const data = Data.results;

const List = () => {
  const portfolio = data.map(d =>
    <Work
      key={d.file}
      file={d.file}
      header={d.header}
      sub_header={d.sub_header}
      tags={d.tags}
      description={d.description}
      visit={d.visit}
      images={d.images}
    />
  );
  return (
    <div>{portfolio}</div>
  );
}

new p5(Seed,'sketch'); // p5 components are weird, can't get them to work.

// ReactDOM.render(<Nav/>, document.getElementById('nav'));

ReactDOM.render(<List/>, document.getElementById('root'));
