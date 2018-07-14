import React, { Component } from 'react';
import COLORS from '../constants/colors.js'

import webm from '../img/uglyd1_loop.webm'
import mp4 from '../img/uglyd1_loop.mp4'

let HeaderScrollLink;

const navItemsArray = [
  {
    text: 'Map',
    link: 'map',
  },
  {
    text: 'About',
    link: 'about',
  },
  {
    text: 'Merch',
    link: 'merch',
  },
  {
    text: 'RSVP',
    link: 'rsvp',
  },
];

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldLoad: false
    }
  }

  componentDidMount(){
    HeaderScrollLink = require('./HeaderScrollLink.js')
    this.setState({ shouldLoad: true })
  }

  render() {
    return (
      <header
        style={{
          // position: 'fixed',
          width: '100%',
          backgroundColor: COLORS.white,
          zIndex: 5,
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="container">
              {/* <video autoPlay loop muted playsInline>
                <source src={webm} type="video/webm" />
                <source src={mp4} type="video/mp4" />
              </video> */}
              <h1 style={{
                color: COLORS.orange,
                textAlign: 'right',
                paddingTop: '2rem',
                fontFamily: 'PhosphateInline',
              }}>
                TOUR DE TACO
              </h1>
            </div>
          </div>
          <div className="row"
            style={{
              background: COLORS.pink,
            }}
          >
            <div className="container">
              <div className="row justify-content-end">
                { navItemsArray.map((navitem, i) => (
                  this.state.shouldLoad &&
                  <HeaderScrollLink navitem={navitem} i={i} key={i}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
