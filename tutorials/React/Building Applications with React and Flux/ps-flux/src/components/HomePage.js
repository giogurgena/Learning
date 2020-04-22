import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>plurarsight administration</h1>
      <p>react, flux, bla bla bla Lorem ipsum dolor sit amet consectetur</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
