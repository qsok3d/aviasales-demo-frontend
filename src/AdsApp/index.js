import React from "react";
import styled from "styled-components";
import rating from "./raiting.svg";
import android from "./android.svg";
import iphone from "./iphone.svg";
import windows from "./windows.svg";
import apple from "./apple.svg";

const AdsApp = styled.div`
  background-color: #00b0de;
  background: linear;
  background: linear-gradient(#00b0de 0%, #196ebd 100%);
`;

const Title = styled.h2`
  padding-top: 24px;
  color: #fff;
  font-size: 1.5rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 500;
  margin: 0;
  line-height: 1.16;
  display: block;
  text-align: center;
`;

const RatingApp = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 19px;
`;

const Rating = styled.img`
  padding-right: 8px;
`;

const RatingText = styled.p`
  color: #fff;
  font-size: 0.875rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.42;
`;

const Main = styled.div`
  display: flex;
`;

const Iphone = styled.img`
  width: 162px;
  height: 213px;
`;

const OtherApp = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 46px;
`;

const Line = styled.div`
  display: flex;
  padding-top: 20px;
`;

const Icon = styled.img`
  padding-right: 8px;
`;

const Text = styled.p`
  color: #fff;
  font-size: 0.875rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.78;
`;

export default () => {
  return (
    <AdsApp>
      <div className="container">
        <Title>Скачай мобильное приложение Aviasales.ru</Title>
        <RatingApp>
          <Rating alt="rating" src={rating} />
          <RatingText>Более 103 000 оценок</RatingText>
        </RatingApp>
        <Main>
          <Iphone alt="iphone" src={iphone} />
          <OtherApp>
            <Line>
              <Icon alt="apple" src={apple} />
              <Text>iPhone или IPad</Text>
            </Line>
            <Line>
              <Icon alt="android" src={android} />
              <Text>Android</Text>
            </Line>
            <Line>
              <Icon alt="Windows" src={windows} />
              <Text>Windows Phone</Text>
            </Line>
          </OtherApp>
        </Main>
      </div>
    </AdsApp>
  );
};
