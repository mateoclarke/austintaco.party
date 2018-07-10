import React, { Component } from 'react';
import { navigateTo } from "gatsby-link";


import 'bootstrap/dist/css/bootstrap.css';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}


class EmailForm extends Component {

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
    const formStyle = {
      margin: 'auto',
      background: '#5faf36',
      // marginTop: '-3rem',
      zIndex: 2,
    }
    return (
      <form name="signup" className="form-inline"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="signup" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        <div className="form-group row p-3 container-fluid" style={formStyle}>
          <h5 className="col-md-3 mb-2" style={{ color: 'white', textAlign: 'center' }}>
            Get our latest updates
          </h5>
          <label className="sr-only" htmlFor="email">Email</label>
          <input className="form-control form-control-lg col-md-4 col-sm-7 mr-sm-4 mr-md-2 mb-2"
            name="email" type="text" placeholder="Email"
            onChange={this.handleChange}
          />
          <label className="sr-only" htmlFor="zipcode">Zipcode</label>
          <input className="form-control form-control-lg col-md-2 col-sm-4 mr-md-2 mb-2"
            name="zipcode" type="text" placeholder="Zipcode"
            onChange={this.handleChange}
          />
          <button className="col-md-2 mb-2 btn btn-info btn-lg" type="submit">Submit</button>
        </div>
      </form>
    );
  }

}

export default EmailForm;
