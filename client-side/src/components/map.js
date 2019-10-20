import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  OverlayView
} from "react-google-maps";

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
})

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
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -19.8157, lng: -43.9542 }} >
    <Marker
        position={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
        icon={{
          url: "https://img.icons8.com/material/48/000000/marker--v1.png"
        }}
        onClick={() => {}}
        name={'Current location'}
    />
    { props.isMarkerShown && props.location &&
      props.location.map((location, index) => {
        return (
          <>
            <Marker
              position={{ lat: location.latitude, lng: location.longitude }}
              onClick={props.itemDetails}
              key={index}
              style={{zIndex: 20}}
              icon={{
                url: "https://img.icons8.com/material/48/000000/satellite.png"
              }}
            />
          </>
        );
      })}
  </GoogleMap>
));

export default Maps;