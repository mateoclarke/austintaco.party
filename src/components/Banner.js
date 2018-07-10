import React from 'react'
import { Icon } from 'react-fa'


const Banner = ({}) => (
  <div className="container-fluid">
    <div className="row">
      <div className="py-2 px-1" style={{ background: '#009AB2', width: '100%', textAlign: 'center', color: 'white' }}>
        <a href={props.data.site.siteMetadata.eventUrl}
          style={{ color: 'white' }}
        >
          <h3>
            <Icon className="mr-3" name="calendar-plus-o" size="md" />
            Join us at City Hall on Thursday, June 14th at 9am.
          </h3>
        </a>
      </div>
    </div>

  </div>
);
