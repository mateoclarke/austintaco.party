import React from 'react'
import COLORS from '../constants/colors.js'

const About = ({  }) => (
  <div className="container py-5" id="about">
    <h2 style={{ color: COLORS.orange }}>ABOUT</h2>
    <p>
      For my 30th birthday, I plan to do the two things I love the most: eat tacos & spend time with friends. Join me for this pub-crawl style journey across Austin, where I will attempt to eat 30 tacos in 30 hours. Use the map to pick the stops where you can cheer me on and eat some tacos yourself.
    </p>
    <p>
      I'm going to collect all of my receipts and match the amount I spend on tacos to donate to two organizations that are providing legal services and reunifying families who have been separated at the border, <a href="https://grassrootsleadership.org/">Grassroots Leadership</a> & <a href="https://texascivilrightsproject.org/">Texas Civil Rights Project</a>. You should too.
    </p>
    <p>
      The final stop on the Tour de Taco is a fiesta at my house starting at 6pm on Saturday, July 28th. RSVP below for details.
    </p>
  </div>
)

export default About
