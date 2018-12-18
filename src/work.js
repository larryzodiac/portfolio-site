import React from 'react';

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
      <section className="row">
        <img className="col-12" alt="" src={props.images.one}></img>
      </section>
      <section className="row">
        <img className="col-6" alt="" src={props.images.two}></img>
        <img className="col-6" alt="" src={props.images.three}></img>
      </section>
      <section className="row">
        <img className="col-6" alt="" src={props.images.four}></img>
        <img className="col-6" alt="" src={props.images.five}></img>
      </section>
    </div>
  );
}

export default Work;
