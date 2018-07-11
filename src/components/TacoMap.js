import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
const { compose, withProps, withStateHandlers } = require("recompose");
import moment from 'moment-timezone'

import COLORS from '../constants/colors.js'
import taquerias from '../constants/taquerias.js'

const MyMapComponent = compose(
  withStateHandlers(
    ({ initialActiveWindow = null }) => ({
      activeId: initialActiveWindow,
    }),
    {
      onToggleOpen: ({activeId}) => (newId) => {
        console.log(newId)
        return (
          {
            activeId: newId,
          }
        )
      }
    }
  ),
  withScriptjs,
  withGoogleMap
)(props =>
  <div style={{
    height: '100%',
    background: COLORS.orange,
    color: COLORS.white
  }}>
    <ul style={{ height: '100%', display: 'flex', flexDirection: 'column', paddingLeft: '0' }}>
      { taquerias.features.map((marker, i) => {
          return (
            <li
              key={i}
              onClick={() => props.onToggleOpen(marker.id)}
              style={{
                flex: '1',
                listStyle: 'none',
                padding: '.1rem 1rem',
                textAlign: 'center',
                borderBottom: `1px solid ${COLORS.white}`,
              }}
            >
              {
                moment(marker.properties.Time)
                .tz('America/Chicago')
                .format('ddd, M/D h:mma')
              }
            </li>
          )
        }
      )}
    </ul>
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 30.3047214, lng: -97.725736599 }}
    >
      {
        taquerias.features.map((marker, i) => {
          console.log(marker.properties.Name)
          return (
            <Marker
              key={i}
              position={{
                lat: marker.properties.Latitude,
                lng: marker.properties.Longitude
              }}
              onClick={() => props.onToggleOpen(marker.id)}
            >
              {
                (props.activeId === marker.id) &&
                <InfoWindow onCloseClick={() => props.onToggleOpen('')}>
                  <div>
                    <h4>{marker.properties.Name}</h4>
                    <span>{marker.properties.Address}</span>
                    <p>{moment(marker.properties.Time).tz('America/Chicago').format('dddd, MMMM D h:mma')}</p>
                  </div>
                </InfoWindow>
              }
            </Marker>
          )
        })
      }
    </GoogleMap>
  </div>
);

const TacoMap = ({  }) => (
  <div className="container" id="map">
    <h2 className="row" style={{ color: COLORS.orange }}>MAP</h2>
    <p className="row">Use this map to see where I’ll be eating tacos at what times.</p>
    <MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8DMYFQ0nLMEaNx8hQGeulYU9JTkNgzkw&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px`, display: 'flex' }} />}
      mapElement={<div style={{ height: `100%`, flex: '1' }} />}
    />
  </div>
)

export default TacoMap
