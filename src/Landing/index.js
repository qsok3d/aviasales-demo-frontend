import React, { Component } from "react";
import Header from "./Header";
import Destinations from "./Destinations";
import SpecialOffer from "./SpecialOffer";
import Description from "./Description";
import AppsAd from "./AppsAd";
import AviaTicket from "./AviaTicket";
import Subscribe from "./Subscribe";

export default () => {
  return (
    <div>
      <Header />
      <Destinations />
      <AviaTicket />
      <Subscribe />
      <SpecialOffer />
      <Description />
      <AppsAd />
    </div>
  );
};
