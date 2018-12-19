import React from 'react';
import Frames from './frames'

// Writing functions, no state needed.
const Work = (props) => {
  return (
    <div className="showcase-sections">
      <section className="row">
        <aside className="col-12">{props.file}</aside>
      </section>
      <section className="row">
        <header className="col-12 showcase-titles">{props.header}<span>{props.sub_header}</span></header>
      </section>
      <section className="row">
        <article className="col-6">
          <p>{props.tags}</p>
        </article>
        <article className="col-6">
          <p>{props.description}</p>
        </article>
      </section>
      <Frames images={props.images}/>
    </div>
  );
}

export default Work;
