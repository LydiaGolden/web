import React, { Component } from "react";
import "./App.css";

import Map from "./components/map";

class App extends Component {
  render() {
    return (
      <Map
        layers={['https://waterwatch.usgs.gov/index.php?m=real&w=kml&r=us&regions=all']}
      />
    );
  }
}

export default App;
