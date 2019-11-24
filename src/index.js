import React from "react";
import { render } from "react-dom";
import Carousel from "./Crousel";
import "react-multi-carousel/lib/styles.css";

import './App.css';


const App = () => (
  <div>
    <Carousel />
  </div>
);

render(<App />, document.getElementById("root"));
