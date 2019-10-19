import React from "react";
import Map from "../components/map";

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    const location = [
      { lat: -19.8157, lng: -43.9542 },
      { lat: -19.0157, lng: -43.8542 },
      { lat: -19.3157, lng: -43.9549 }
    ];

    return (
      <Map
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        location={location}
      />
    );
  }
}
export default MyFancyComponent;