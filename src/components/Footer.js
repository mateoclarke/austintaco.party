import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'react-fa'

import './Footer.css'

const Footer = ({ metadata }) => (
  <footer className="Footer">
    <div className="container">
      <div className="row py-3" style={{ textAlign: 'center' }}>
        <div className="col-12 row py-2" >
          <a href={metadata.facebookUrl}
            className="col-3"
            target="_blank"
          >
            <Icon name="facebook" size="3x" />
          </a>
          <a href={metadata.twitterUrl}
            className="col-3"
            target="_blank"
          >
            <Icon name="twitter" size="3x" />
          </a>
          <a href={metadata.mailtoUrl}
            className="col-3"
            target="_blank"
          >
            <Icon name="envelope" size="3x" />
          </a>
          <a href={metadata.donateUrl}
            className="col-3 "
            target="_blank"
          >
            <Icon name="usd" size="3x" />
          </a>
        </div>
      </div>
      <div className="row py-2" style={{ textAlign: 'center'}}>
        <div className="col-12">
          <h3 className="py-2">{metadata.title}</h3>
          <p>Pol. adv. paid for by the<br/> Keep Austin Affordable PAC</p>
          <p>Ed McHorse, Treasurer</p>
          <p>
            Keep Austin Affordable<br/>
            P.O. Box 1136<br/>
            Austin, TX 78767
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
