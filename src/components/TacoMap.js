import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
const { compose, withProps, withStateHandlers } = require("recompose");

import COLORS from '../constants/colors.js'
import taquerias from '../constants/taquerias.js'

const MyMapComponent = compose(
  withStateHandlers(
    ({ initialActiveWindow = null }) => ({
      activeId: initialActiveWindow,
    }),
    {
      onToggleOpen: ({activeId}) => (newId) => ({
        activeId: newId,
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 30.2672086, lng: -97.745644 }}
  >
    {
      taquerias.features.map((marker, i) => {
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
              <InfoWindow onCloseClick={() => props.onToggleOpen(null)}>
                <span>{marker.properties.Name}</span>
              </InfoWindow>
            }
          </Marker>
        )
      })
    }
  </GoogleMap>
);

const TacoMap = ({  }) => (
  <div className="container" id="map">
    <h2 className="row" style={{ color: COLORS.orange }}>MAP</h2>
    <p className="row">Use this map to see where I’ll be eating tacos at what times.</p>
    <MyMapComponent isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8DMYFQ0nLMEaNx8hQGeulYU9JTkNgzkw&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
)

export default TacoMap
