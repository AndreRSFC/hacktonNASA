import React, { useState, useEffect } from "react";
import Map from "../components/map";
import ButtonMode from "../components/buttonMode"

const  MyFancyComponent = () => {
  const [isMarkerShown, setIsMarkerShown] = useState();
  const [handleClick, setHandleClick] = useState(false);

  useEffect(()=> delayedShowMarker()); 

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
      { lat: -19.8157, lng: -43.9542, currentUser : true },
      { lat: -19.0157, lng: -43.8542, isSat: true },
      { lat: -19.3157, lng: -43.9549, isSat: true }
    ];

    return (
      <>
        <ButtonMode onClick={ () => setHandleClick(!handleClick)}> Mudar </ButtonMode>
        <Map
          isMarkerShown={isMarkerShown}
          onMarkerClick={handleMarkerClick}
          location={location.filter((item) => handleClick ? item : item.currentUser  )}
          style={{backgroundColor: "black"}}
        />
      </>
    );
}
export default MyFancyComponent;