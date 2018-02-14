import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "./Header";
import Destinations from "./Destinations";
import SpecialOffer from "./SpecialOffer";
import Description from "./Description";
import AdsApp from "./AdsApp";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Destinations />
        <SpecialOffer />
        <Description />
        <AdsApp />
        <Footer />
      </div>
    );
  }
}

export default App;
