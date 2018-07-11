import React, { Component } from 'react';
import { navigateTo } from "gatsby-link";
import moment from 'moment-timezone'

import COLORS from '../constants/colors.js'
import taquerias from '../constants/taquerias.js'

import 'bootstrap/dist/css/bootstrap.css';


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}


class RSVPForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div className="container py-5" id="rsvp">
        <h2 className="row" style={{ color: COLORS.orange }}>RSVP</h2>
        <form name="rsvp" className="form"
          method="post"
          action="/see-you-soon/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="rsvp" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <div className="form-group row p-3 p-md-4 container RSVPForm">
            <h3>
              Join the Tour de Taco and help me reach my goal of eating 30 tacos in 30 hours for my 30th birthday.
            </h3>
            <label className="sr-only" htmlFor="name">Name</label>
            <input className="form-control form-control-lg col-12 mb-2"
              name="name" type="text" placeholder="Name"
              onChange={this.handleChange}
            />
            <label className="sr-only" htmlFor="email">Email</label>
            <input className="form-control form-control-lg col-12 mb-2"
              name="email" type="text" placeholder="Email"
              onChange={this.handleChange}
            />
            <div className="form-group">
              <label htmlFor="zipcode">Which stops will you join us?</label>
              { taquerias.features.map((marker, i) => {
                return (
                  <div class="form-check" key={i}>
                    <input class="form-check-input" type="checkbox" value={marker.properties.Name} id={marker.id} name="locations"/>
                    <label class="form-check-label" for={marker.id}>
                      {`${ moment(marker.properties.Time)
                        .tz('America/Chicago')
                        .format('ddd, M/D h:mma')} --
                        ${
                          marker.properties.Name
                        }`
                      }
                    </label>
                  </div>
                )
              })}
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="15" />
                <label class="form-check-label" for="15">
                  {`Sat, 7/28 5:30 -- Taco Party at mi casa`}
                </label>
              </div>
            </div>
            <button className="col-12 mb-2 btn btn-info btn-lg" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RSVPForm;
