import React from 'react';

// Writing functions, no state needed.
const Frames = (props) => {
  const images = Object.keys(props.images);
  if (images.length === 1) {
    return (
      <div>
        <section className="row">
          <img className="col-12" alt="" src={props.images.one}></img>
        </section>
      </div>
    );
  } else if (images.length === 2) {
    return (
      <div>
        <section className="row">
          <img className="col-12" alt="" src={props.images.one}></img>
        </section>
        <section className="row">
          <img className="col-12" alt="" src={props.images.two}></img>
        </section>
      </div>
    );
  } else if (images.length === 3) {
    return (
      <div>
        <section className="row">
          <img className="col-12" alt="" src={props.images.one}></img>
        </section>
        <section className="row">
          <img className="col-6" alt="" src={props.images.two}></img>
          <img className="col-6" alt="" src={props.images.three}></img>
        </section>
      </div>
    );
  } else if (images.length === 4){
    return (
      <div>
        <section className="row">
          <img className="col-6" alt="" src={props.images.one}></img>
          <img className="col-6" alt="" src={props.images.two}></img>
        </section>
        <section className="row">
          <img className="col-6" alt="" src={props.images.three}></img>
          <img className="col-6" alt="" src={props.images.four}></img>
        </section>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}

export default Frames;
