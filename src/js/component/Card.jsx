import React from "react";

const Card = () => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
      <div className="col">
        <div className="card h-100 text-center">
          <img
            src="https://4.bp.blogspot.com/-tXISGPeWIVE/W3MckjyXkAI/AAAAAAAAA_M/vzR4u5LUPHkkQPd1d--075xRN38lkE4IgCPcBGAYYCw/s1600/insertando-comentarios-html5-destacada.JPG"
            className="card-img-top card-img-custom"
            alt="Imagerelatedtohtml5"
          />
          <div className="card-body">
            <h5 className="card-title">HTML5</h5>
            <p className="card-text">
              Explore the modern standard for creating dynamic and engaging
              websites. Learn semantic structures, multimedia, and more. Boost
              your web development today
            </p>
          </div>
          <div className="card-footer text-body-secondary">
            <a href="#" className="btn btn-primary">
              Learn more...
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 text-center">
          <img
            src="https://squareboat.com/storage/photos/22/What%20is%20CSS3.png"
            className="card-img-top card-img-custom"
            alt="Imagerelatedtohtml5"
          />
          <div className="card-body">
            <h5 className="card-title">CSS</h5>
            <p className="card-text">
              Explore Design stunning websites with styles, layouts, and
              animations. Master responsive design and transform your web
              projects
            </p>
          </div>
          <div className="card-footer text-body-secondary">
            <a href="#" className="btn btn-primary">
              Learn more...
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 text-center">
          <img
            src="https://www.dongee.com/tutoriales/content/images/2022/10/image-83.png"
            className="card-img-top card-img-custom"
            alt="Imagerelatedtojavascrip"
          />
          <div className="card-body">
            <h5 className="card-title">JavaScript</h5>
            <p className="card-text">
              JavaScript is an interpreted programming language, a dialect of
              the ECMAScript standard. It is defined as object-oriented,
              prototype-based, imperative, weakly typed, and dynamic.
            </p>
          </div>
          <div className="card-footer text-body-secondary">
            <a href="#" className="btn btn-primary">
              Learn more...
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 text-center">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*Fxa6oJFh2lRD7EnAcZIcQg.png"
            className="card-img-top card-img-custom"
            alt="Imagerelatedtoreact"
          />
          <div className="card-body">
            <h5 className="card-title">React</h5>
            <p className="card-text">
              JavaScript is an interpreted programming language, a dialect of
              the ECMAScript standard. It is defined as object-oriented,
              prototype-based, imperative, weakly typed, and dynamic.
            </p>
          </div>
          <div className="card-footer text-body-secondary">
            <a href="#" className="btn btn-primary">
              Learn more...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
