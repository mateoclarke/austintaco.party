import React, { Component } from 'react';
import Link from 'gatsby-link'


class Thanks extends Component {

  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <h1>Oh yeah! See you on the taco trail.</h1>
        </div>
        <div className="row">
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    );
  }

}

export default Thanks;
