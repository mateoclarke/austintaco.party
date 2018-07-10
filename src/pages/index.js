import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
// import Scroll from 'react-scroll-to-element'

import HeroForm from '../components/HeroForm.js'
import COLORS from '../constants/colors.js'


const IndexPage = (props, data) => (

  <div>

    {/* About section */}
    <div className="container" id="about">
      <h2 style={{ color: COLORS.orange }}>ABOUT</h2>
      <p>My golden birthday is going to be spent doing two things I love the most: eating tacos & spending
  time with friends. Inspired by....the plan is to eat 30 tacos in 30 hours across Austin. Join me for this
  pub-crawl style celebration, help me finish tacos, and then come back to our place to celebrate. </p>
      <div className="row justify-content-around">
        <div>
          <h3>TACO TOUR</h3>
          <p>Friday July 27th - Saturday July 28th</p>
          <p>Map below for locations & times</p>
        </div>
        <div>
          <h3>FINAL FIESTA</h3>
          <p>Saturday July 28th, 6:30PM</p>
          {/* <Scroll type="id" element="rsvp"> */}
            RSVP
          {/* </Scroll> */}
        </div>
      </div>
    </div>


    {/* MAP */}
    <div className="container" id="map">
      <h2 className="row" style={{ color: COLORS.orange }}>MAP</h2>
      <p className="row">Use this map to see where I’ll be eating tacos at what times.</p>
    </div>

    {/* MERCH */}
    <div className="container-fluid" style={{ background: COLORS.teal, color: COLORS.white }} id="merch">
      <div className="container">
        <h2 className="row">MERCH</h2>
          <div className="row">

          <div className="col-4">
            picture
          </div>
          <div className="col-8">
            For $10 or more, you can order a custom-designed,
    handmade pin to commemorate Tour de Taco. All of
    the proceeds raised from pin sales will be donated to
    organizations that are resisting Trump's seperation of immigrant families.
          </div>
        </div>
      </div>
    </div>


    {/* RSVP */}
    <div className="container" id="rsvp">
      <h2 className="row" style={{ color: COLORS.orange }}>RSVP</h2>
      <form action="" className="row">
        <label htmlFor="">Name</label>
        <input type="text"/>
        <label htmlFor="">Which stops are you able to join?</label>
        {/* TODO all the options */}
      </form>
    </div>

    {/* SOCIAL ICONS */}
    <div className="container-fluid" style={{ background: COLORS.orange, color: COLORS.white }}>
      <div className="container">
        <h2>Social Icons</h2>
      </div>
    </div>

    {/* HASHTAG */}
    <div className="container-fluid" style={{ background: COLORS.pink, color: COLORS.white }}>
      <div className="row">
        #TOURDETACO
      </div>
    </div>

  </div>
)

export default IndexPage
