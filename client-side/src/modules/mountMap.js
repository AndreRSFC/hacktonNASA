import React, { useState, useEffect } from "react";
import Map from "../components/map";
import ButtonMode from "../components/buttonMode"

const  MyFancyComponent = () => {
  const [isMarkerShown, setIsMarkerShown] = useState();
  const [currentLocation, setCurrentLocation] = useState();
  const [handleClick, setHandleClick] = useState(false);

  useEffect(()=> {delayedShowMarker(); initialize();}); 

  const delayedShowMarker = () => {
    setTimeout(() => {
      setIsMarkerShown( true );
    }, 3000);
  };

  const handleMarkerClick = () => {
    setIsMarkerShown( false );
    delayedShowMarker();
  };

    const location = [
      { lat: -19.0157, lng: -43.8542, isSat: true },
      { lat: -19.3157, lng: -43.9549, isSat: true }
    ];

    function initialize() {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position){
            setCurrentLocation({lat:position.coords.latitude, lng:position.coords.longitude})
         });
      } 
   
   }

    return (
      <>
        <ButtonMode onClick={ () => setHandleClick(!handleClick)}>Mostrar satelites</ButtonMode>
        <Map
          isMarkerShown={isMarkerShown}
          onMarkerClick={handleMarkerClick}
          location={location.filter((item) => handleClick ? item : item.currentUser  )}
          currentLocation={currentLocation}
          style={{backgroundColor: "black"}}
        />
      </>
    );
}
export default MyFancyComponent;