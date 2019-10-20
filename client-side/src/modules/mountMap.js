import React, { useState, useEffect } from "react";
import Map from "../components/map";
import ButtonMode from "../components/buttonMode"
import Modal from "../components/modal";

const  MyFancyComponent = () => {
  const [isMarkerShown, setIsMarkerShown] = useState();
  const [currentLocation, setCurrentLocation] = useState();
  const [handleClick, setHandleClick] = useState(false);
  const [locations, setLocations] = useState();
  const [showItem, setShowItem] = useState(false);
  const [data, setData] = useState();

  useEffect(()=> {
    delayedShowMarker();
    initialize();
    
    fetch("http://localhost:3030/locations")
      .then(response => response.json())
        .then(data => setLocations(data))
      .catch(err => console.log(err))
  },[]); 

  const delayedShowMarker = () => {
    setTimeout(() => {
      setIsMarkerShown( true );
    }, 3000);
  };

  const handleMarkerClick = () => {
    setIsMarkerShown( false );
    delayedShowMarker();
  };

    function initialize() {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position){
            setCurrentLocation({lat:position.coords.latitude, lng:position.coords.longitude})
         });
      } 
   
   }

    return (
      <>
        <Modal
          showItem={showItem}
          handleClose={()=>setShowItem(!showItem)}
          items={data}
        />
        <ButtonMode onClick={ () => setHandleClick(!handleClick)}>Mostrar satelites</ButtonMode>
        <Map
          isMarkerShown={isMarkerShown}
          onMarkerClick={handleMarkerClick}
          location={handleClick ? locations : null}
          currentLocation={currentLocation}
          style={{backgroundColor: "black"}}
          itemDetails={()=>setShowItem(!showItem)}
          data={(items)=>setData(items)}
        />
      </>
    );
}
export default MyFancyComponent;