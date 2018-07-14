import React, { Component } from 'react';
import { navigateTo } from "gatsby-link";
import moment from 'moment-timezone'
import { pull, includes } from 'lodash'

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
    this.state = {
      locations: []
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleCheckbox = e => {
    const currentLocations = this.state.locations
    const shouldRemoveLocation = includes(currentLocations, e.target.value)

    if (shouldRemoveLocation) {
      this.setState({
        currentLocations: pull(currentLocations, e.target.value)
      })
    } else {
      this.setState({
        currentLocations: currentLocations.push(e.target.value)
      })
    }
  }


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
        <h2 style={{ color: COLORS.orange }}>RSVP</h2>
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
              <label htmlFor="zipcode">At which stops do you plan to join me?</label>
              { taquerias.features.map((marker, i) => {
                return (
                  <div className="form-check" key={i}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={marker.properties.Name}
                      id={marker.id}
                      name="locations"
                      onChange={this.toggleCheckbox}
                    />
                    <label className="form-check-label" htmlFor={marker.id}>
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
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="mi casa"
                  id="15"
                  name="locations"
                  onChange={this.toggleCheckbox}
                />
                <label className="form-check-label" htmlFor="15">
                  {`Sat, 7/28 6:00pm -- Final Stop Fiesta at my house`}
                </label>
              </div>
            </div>
            <button className="col-12 mb-2 btn btn-info btn-lg" type="submit"
              style={{ background: COLORS.blue }}
            >
              RSVP
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RSVPForm;
