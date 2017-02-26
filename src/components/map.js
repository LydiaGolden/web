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

    this.onAPI = this.onAPI.bind(this);
    this.renderLayers = this.renderLayers.bind(this);
    this.search = this.search.bind(this);

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

  onAPI({ map, maps }) {
    this.map = map;
    this.maps = maps;

    this.renderLayers();
  }

  renderLayers() {
    if (!this.props.layers) return;

    this.props.layers.forEach(({ url, clickable }) => {
      var layer = new this.maps.KmlLayer({ clickable, url, map: this.map });

      this.maps.event.addListener(layer, 'status_changed', () => {
        const status = layer.getStatus();
        if (status !== 'OK')
          console.error(`KML document at ${url} not OK; Status is ${status}`);
      });
    });
  }

  search() {
    if (!this.map || !this.maps) return;

    var geocoder = new this.maps.Geocoder();
    geocoder.geocode({ address: 'Huntsville, AL' }, (results, status) => {
      if (status === this.maps.GeocoderStatus.OK) {
        const latlng = new this.maps.LatLng(results[0].geometry.location.latitude, results[0].geometry.location.longitude);
        this.map.panTo(latlng);
      }
    });
  }

  render() {
    return (
      <GoogleMapReact
        options={mapOptions}
        coordinates={this.props.coords}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={this.onAPI}
      />
    );
  }
}
