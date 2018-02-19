import React from "react";
import styled from "styled-components";
import aeroflot from "./aeroflot.png";
import s7 from "./s7.png";
import onetwo from "./onetwo.png";
import korean from "./korean.png";
import elal from "./elal.png";
import left from "./Left.svg";
import right from "./right.svg";

const AviaTicket = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    color: #fff;
    display: block;
  }
`;

const Title = styled.h2`
  padding: 24px 0;
  color: #5c5c5c;
  font-size: 2rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 500;
  margin: 0;
  line-height: 1.25;
  text-align: center;
`;

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 140px;
  position: relative;
  @media screen and (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const Image = styled.img`
  width: 149px;
  heigh: 50px;
  flex-basis: 33%;
  padding-right: 32px;
  padding-bottom: 32px;
`;

const ImageCarouselRight = styled.img`
  width: 18px;
  height: 32px;
  position: absolute;
  right: 0px;
  top: 50px;
  @media screen and (min-width: 1024px) {
    top: 10px;
  }
`;

const ImageCarouselLeft = styled.img`
  width: 18px;
  height: 32px;
  position: absolute;
  left: 0px;
  top: 50px;
  @media screen and (min-width: 1024px) {
    top: 10px;
  }
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #818181;
  margin-right: 8px;
`;

const CircleFull = Circle.extend`
  background-color: #818181;
`;

const CarouselCircle = styled.div`
  display: flex;
  justify-content: center;
`;

export default () => {
  return (
    <AviaTicket>
      <div className="container">
        <Title>Дешевые авибилеты от крупнейших авиакомпаний и агенств</Title>
        <Carousel>
          <Image alt="aeroflot" src={aeroflot} />
          <Image alt="s7" src={s7} />
          <Image alt="onetwo" src={onetwo} />
          <Image alt="korean" src={korean} />
          <Image alt="elal" src={elal} />
          <ImageCarouselLeft alt="left" src={left} />
          <ImageCarouselRight alt="right" src={right} />
        </Carousel>
        <CarouselCircle>
          <CircleFull />
          <Circle />
          <Circle />
        </CarouselCircle>
      </div>
    </AviaTicket>
  );
};
