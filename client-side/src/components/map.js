import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Maps = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyChm5BWwsG7EW9cqPD24K8Wj_YKfcOEE7o&=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -19.8157, lng: -43.9542 }}>
    {props.isMarkerShown &&
      props.location.map((location, index) => {
        return (
          <Marker
            position={{ lat: location.lat, lng: location.lng }}
            //onClick={props.onMarkerClick}
            key={index}
          />
        );
      })}
  </GoogleMap>
));

export default Maps;