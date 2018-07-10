import React from 'react'
import Scroll from 'react-scroll-to-element';

const HeaderScrollLink = ({ navitem, i }) => (
  <Scroll type="id" element={navitem.link} key={i}>
    <span style={{
      textTransform: 'uppercase',
      color: 'white',
      textAlign: 'right',
      margin: '1rem',
      // float: 'right',
      // display: 'block',
    }}>
      {navitem.text}
    </span>
  </Scroll>
)

export default HeaderScrollLink
