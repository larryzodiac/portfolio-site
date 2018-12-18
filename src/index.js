import React from 'react';
import ReactDOM from 'react-dom';
import p5 from 'p5';
import Seed from './sketch'
import Work from './work';
import Data from './data';
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
      images={d.images}
    />
  );
  return (
    <div>{portfolio}</div>
  );
}

// new p5(Seed,'sketch'); // p5 components are weird, can't get them to work.

ReactDOM.render(<List/>, document.getElementById('root'));
