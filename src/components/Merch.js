import React, {Component} from 'react'
import Img from 'gatsby-image'
import { navigateTo } from "gatsby-link"
import COLORS from '../constants/colors.js'


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}


class Merch extends Component {

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
    console.log(this.props)
    return (
      <div
        id="merch"
        className="container-fluid py-5"
        style={{
          background: COLORS.blue,
          color: COLORS.white
        }}
      >
        <div className="container">
          <h2 className="row">MERCH</h2>

          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="px-5 pl-md-0 pr-md-3 pt-md-2">
                <Img
                  title="handmade pin with taco illustration"
                  alt="handmade pin with taco illustration"
                  sizes={this.props.merchImage.sizes}
                  style={{ borderRadius: '100%', overflow: 'hidden' }}
                />
              </div>
            </div>
            <div className="col-md-8 col-xs-12 pt-5 pt-md-0">

              <p>
                For a minimum donation of $10, order a custom-designed, handmade pin to commemorate Tour de Taco. All of the proceeds will be donated to RAICES Texas & Texas Civil Rights Project.
              </p>

              <div className="row">
                <div className="col-6 align-self-center">
                  <Img
                    title="handmade pin with taco illustration"
                    alt="handmade pin with taco illustration"
                    sizes={this.props.raicesLogo.sizes}
                  />
                </div>
                <div className="col-6 align-self-center">
                  <Img
                    title="handmade pin with taco illustration"
                    alt="handmade pin with taco illustration"
                    sizes={this.props.tcrpLogo.sizes}
                  />
                </div>
              </div>

              <form name="preorder" className="form"
                method="post"
                action="/thanks-for-ordering/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <input type="hidden" name="form-name" value="preorder" />
                <p hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </p>
                <div className="form-group row p-3 p-md-4 container Merch">
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input className="form-control form-control-lg col-12 mb-2"
                    name="name" type="text" placeholder="Name"
                    onChange={this.handleChange}
                  />
                  <label className="sr-only" htmlFor="amount">Donation Amount (Ex: 10)</label>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">$</div>
                    </div>
                    <input className="form-control form-control-lg col-12"
                      type="number" min="0.01" step="0.01"
                      name="amount" placeholder="Donation Amount"
                      onChange={this.handleChange}
                    />
                  </div>
                  <select name="payment" id="payment" className="form-control form-control-lg mb-2" onChange={this.handleChange}>
                    <option value="">Select a Payment Method</option>
                    <option value="paypal">PayPal</option>
                    <option value="venmo">Venmo</option>
                    <option value="cash_app">Cash App</option>
                  </select>
                  <div className="form-group" style={{ width: '100%', display: this.state.payment ? 'none' : 'block' }}>
                    <label className="sr-only" htmlFor="username">Username</label>
                    <input className="form-control form-control-lg mb-2"
                      name="username" type="text" placeholder={ this.state.payment === 'paypal' ? 'Email' : 'Phone Number or Username'}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button className="col-12 mb-2 btn btn-info btn-lg" type="submit" style={{ background: COLORS.pink }}>Place Order</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Merch;
