import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import COLORS from '../constants/colors.js'


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

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
