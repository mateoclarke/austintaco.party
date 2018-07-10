import React from 'react';
import Scroll from 'react-scroll-to-element';

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

const Header = ({}) => (
  <div
    className="container-fluid"
  >
    <h1 style={{
      color: '#FF6A02',
      textAlign: 'right',
      paddingTop: '2rem',
      fontFamily: 'PhosphateInline',
    }}>
      TOUR DE TACO
    </h1>
    <div className="row justify-content-end"
      style={{
        background: '#EA3159',
      }}
    >
      { navItemsArray.map((navitem, i) => (
          <Scroll type="id" element={navitem.link} key={i}>
            <span style={{
              textTransform: 'uppercase',
              color: 'white',
              textAlign: 'right',
              margin: '1rem',
              float: 'right',
              display: 'block',
            }}>
              {navitem.text}
            </span>
          </Scroll>
        ))}
    </div>
  </div>
);


export default Header;
