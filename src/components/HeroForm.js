import React, { Component } from 'react';
import { navigateTo } from "gatsby-link";


import 'bootstrap/dist/css/bootstrap.css';
import './HeroForm.css'


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}


class ContactCouncilForm extends Component {

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
        <div className="form-group row p-3 p-md-4 container ContactCouncilForm">
          <h5 className="col-12 mb-3">
            Get our latest updates
          </h5>
          <label className="sr-only" htmlFor="email">Email</label>
          <input className="form-control form-control-lg col-12 mb-2"
            name="email" type="text" placeholder="Email"
            onChange={this.handleChange}
          />
          <label className="sr-only" htmlFor="zipcode">Zipcode</label>
          <input className="form-control form-control-lg col-12 mb-2"
            name="zipcode" type="text" placeholder="Zipcode"
            onChange={this.handleChange}
          />
          <label className="sr-only" htmlFor="zipcode">Council District</label>
          <select className="custom-select mb-2 col-12 form-control form-control-lg"
            name="council-district"
            onChange={this.handleChange}
          >
            <option selected>Select Your Council District</option>
            <option value="1">1 - Ora Houston</option>
            <option value="2">2 - Delia Garza</option>
            <option value="3">3 - Sabino "Pio" Renteria</option>
            <option value="4">4 - Gregorio "Greg" Casar</option>
            <option value="5">5 - Ann Kitchen</option>
            <option value="6">6 - Jimmy Flannigan</option>
            <option value="7">7 - Leslie Pool</option>
            <option value="8">8 - Ellen Troxclair</option>
            <option value="9">9 - Kathie Tovo</option>
            <option value="10">10 - Alison Alter</option>
          </select>
          <button className="col-12 mb-2 btn btn-info btn-lg" type="submit">Submit</button>
        </div>
      </form>
    );
  }

}

export default ContactCouncilForm;
