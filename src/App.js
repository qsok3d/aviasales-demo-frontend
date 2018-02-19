import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "./Header";
import Destinations from "./Destinations";
import SpecialOffer from "./SpecialOffer";
import Description from "./Description";
import AppsAd from "./AppsAd";
import Footer from "./Footer";
import AviaTicket from "./AviaTicket";
import Subscribe from "./Subscribe";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Destinations />
        <AviaTicket />
        <Subscribe />
        <SpecialOffer />
        <Description />
        <AppsAd />
        <Footer />
      </div>
    );
  }
}

export default App;
