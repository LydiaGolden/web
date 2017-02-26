import React, { Component } from "react";
import "./App.css";

import Map from "./components/map";

class App extends Component {
  render() {
    return (
      <Map
        layers={
          [
            {
              url: "https://waterwatch.usgs.gov/index.php?m=real&w=kml&r=us&regions=all",
              clickable: true
            },
            {
              url: "http://data-huntsvilleal.opendata.arcgis.com/datasets/e7b090d463fc4cdf8fed2bbc2a410e84_5.kml",
              clickable: false
            },
            {
              url: "https://www.atmos.illinois.edu/iswecs/Google.Earth/Weather.Bundle/Weather.Bundle.kmz",
              clickable: false
            },
            {
              url: 'http://inciweb.nwcg.gov/feeds/maps/kml?cm.ttl=600',
              clickable: false
            }
          ]
        }
      />
    );
  }
}

export default App;
