import React, { Component } from 'react';
import Link from 'gatsby-link'


class Thanks extends Component {

  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <h1>Thanks for ordering! </h1>
          <p>Once your pin is ready, we'll follow up on payment and delivery.</p>
        </div>
        <div className="row">
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    );
  }

}

export default Thanks;
