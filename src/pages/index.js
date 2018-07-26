import React, { Component } from 'react'
import Link from 'gatsby-link'

import About from '../components/About.js'
import Merch from '../components/Merch.js'
import HeroForm from '../components/HeroForm.js'
import TacoMap from '../components/TacoMap.js'
import RSVPForm from '../components/RSVPForm.js'
import SocialMedia from '../components/SocialMedia.js'
import COLORS from '../constants/colors.js'

import { Parallax } from 'react-scroll-parallax';

import webm from '../img/uglyd3.webm'
import mp4 from '../img/uglyd3.mp4'
import png from '../img/uglyd_still.png'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.video = React.createRef()
  }

  componentDidMount () {
    this.video.current.play()
  }

  render() {
    return (
      <div>
        <Parallax
          slowerScrollRate={true}
          offsetYMin={-200}
          offsetYMax={100}
          className="gradient"
          style={{ overflow: 'hidden '}}
        >
          <div className="container" style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            maxHeight: '30vh',
            padding: '0',
          }}>
            <video autoPlay loop muted playsInline
              ref={this.video}
              poster={png}
              style={{
                flex: '1 1 0%',
                width: '100%',
                objectFit: 'fill',
              }}>
              <source src={webm} type="video/webm" />
              <source src={mp4} type="video/mp4" />
            </video>
            <h2 style={{
              textAlign: 'center',
              color: 'white',
              textTransform: 'uppercase',
              textShadow: '2px 2px 5px black',
              position: 'absolute',
            }} className="Banner__title">
              Join my mission to eat <br/>
              30 tacos in 30 hours for <br/>
              my 30th birthday</h2>
          </div>
        </Parallax>
        <Parallax
          offsetYMin={0}
          offsetYMax={0}
        >
          <div style={{
            backgroundColor: 'white',
            zIndex: 1,
          }}>
            <TacoMap />
            <About />
            <Merch
              merchImage={this.props.data.merchImage}
              tcrpLogo={this.props.data.tcrpLogo}
              raicesLogo={this.props.data.raicesLogo}
            />
            <RSVPForm />
            <SocialMedia />
          </div>
        </Parallax>
      </div>
    );
  }

}

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    merchImage: imageSharp(id: { regex: "/taco_pin_sm_sq/" }) {
      sizes(maxWidth: 1500, rotate: 180) {
        ...GatsbyImageSharpSizes
      }
    }
    tacoGif: imageSharp(id: { regex: "/uglyd1_loop/" }) {
      sizes(maxWidth: 1500, rotate: 180) {
        ...GatsbyImageSharpSizes
      }
    }
    tcrpLogo: imageSharp(id: { regex: "/tcrp_logo/" }) {
      sizes(maxWidth: 1500, rotate: 180) {
        ...GatsbyImageSharpSizes
      }
    }
    raicesLogo: imageSharp(id: { regex: "/grassrootsleadership/" }) {
      sizes(maxWidth: 1500, rotate: 180) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
