import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const mapOptions = function(maps) {
  return {
    scrollwheel: false,
    mapTypeId: maps.MapTypeId.HYBRID,
    styles: [
      {
        stylers: [
          { saturation: -150 },
          { gamma: 0.8 },
          { lightness: 4 },
          { visibility: "on" }
        ]
      }
    ]
  };
};


export default class SimpleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bounds: [],
      zoom: props.zoom,
      center: props.center,
      coordinates: props.coordinates,
      height: props.height,
      googleApiLoaded: false
    };
  }

  static defaultProps = { center: { lat: 34.69, lng: -86.75 }, zoom: 10 };


  render() {
    return (
      <GoogleMapReact
        options={mapOptions}
        coordinates={this.props.coords}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
      </GoogleMapReact>
    );
  }
}
