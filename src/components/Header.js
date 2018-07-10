import React, { Component } from 'react';
let HeaderScrollLink;

const navItemsArray = [
  {
    text: 'About',
    link: 'about',
  },
  {
    text: 'Map',
    link: 'map',
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
      <div className="container-fluid">
        <div className="container">
          <h1 style={{
            color: '#FF6A02',
            textAlign: 'right',
            paddingTop: '2rem',
            fontFamily: 'PhosphateInline',
          }}>
          TOUR DE TACO
        </h1>
        </div>
        <div className="row justify-content-end"
          style={{
            background: '#EA3159',
          }}
        >
          <div className="container">
            { navItemsArray.map((navitem, i) => (
                this.state.shouldLoad &&
                <HeaderScrollLink navitem={navitem} i={i} key={i}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
