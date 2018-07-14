import React from 'react'
import COLORS from '../constants/colors.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const SocialMedia = ({  }) => (
  <div>
    <div
      className="container-fluid py-5"
      style={{
        background: COLORS.orange,
        color: COLORS.white
       }}
    >
      <div className="container">
        <div className="row social-media justify-items-center">
          <a href="https://twitter.com/search?l=&q=%23tourdetaco%20from%3Amateoclarke&src=typd" className="mr-5 col-2 offset-sm-3">
            <FontAwesomeIcon icon={faTwitterSquare} size="5x" />
          </a>
          <a href="https://www.facebook.com/events/197213990967589/" className="mr-5 col-2">
            <FontAwesomeIcon icon={faFacebookSquare} size="5x" />
          </a>
          <a href="https://www.instagram.com/explore/tags/tourdetaco/" clasName="col-2">
            <FontAwesomeIcon icon={faInstagram} size="5x" />
          </a>
        </div>
      </div>
    </div>
    <div
      className="container-fluid py-4"
      style={{ background: COLORS.pink, color: COLORS.white }}
    >
      <div className="container">
        <div className="row" style={{ textAlign: 'right' }}>
          <h3 style={{ width: '100%' }}>
            #TOURDETACO
          </h3>
        </div>
      </div>
    </div>
  </div>
)

export default SocialMedia
