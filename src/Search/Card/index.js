import React, { Component } from "react";
import styled from "styled-components";
import Smile from "./icon-smile.svg";
import light from "./icon-light.svg";
import love from "./icon-love.svg";
import Russia from "./Russia.png";
import fly from "./fly.png";
import nordwind from "./nordwind.png";
import nordair from "./nordair.png";
import redwings from "./redwings.png";
import rusicon from "./rusicon.png";
import flyicon from "./flyicon.png";
import redicon from "./redicon.png";
import plane from "./plane.svg";
import planeReverse from "./planerevers.svg";
import watch from "./watch.svg";

const Card = styled.div`
  background-color: #ffffff;
  margin-bottom: 8px;
`;

const Promo = styled.div`
  background-color: #83d40b;
`;

const PromoFast = Promo.extend`
  background-color: #af7542;
`;

const PromoBest = Promo.extend`
  background-color: #c279d1;
`;

const PromoInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 0;
`;

const Title = styled.h2`
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: #fff;
  padding-right: 8px;
  margin: 0;
`;

const Image = styled.img`
  height: 20px;
  weight: 14px;
`;

const Main = styled.div`
  background-color: #fff;
  padding-bottom: 14px;
`;

const MainUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
`;

const Price = styled.p`
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-size: 22px;
  line-height: 26px;
  font-weight: 600;
  color: #ff9241;
  margin: 0;
`;

const Companies = styled.div`
  display: flex;
`;

const CompanyIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const Company = styled.img`
  width: 99px;
  height: 36px;
`;

const MainDown = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const InfoTime = styled.div`
  display: flex;
  padding-left: 5px;
`;

const Text = styled.p`
  margin: 0;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: #4a4a4a;
`;

const Plane = styled.img`
  padding-right: 8px;
`;

const Watch = styled.img`
  padding: 0 8px;
`;

export default () => {
  return (
    <div>
      <Card>
        <Promo>
          <div className="container">
            <PromoInfo>
              <Title>Самый дешевый</Title>
              <Image alt="smile" src={Smile} />
            </PromoInfo>
          </div>
        </Promo>
        <div className="container">
          <Main>
            <MainUp>
              <Price>7 712 ₽</Price>
              <Company alt="Russia" src={Russia} />
            </MainUp>
            <MainDown>
              <InfoTime>
                <Text>
                  <Plane alt="plane" src={plane} />
                  00:05 - 03:05
                </Text>
                <Text>
                  <Watch alt="watch" src={watch} />
                  5 ч
                </Text>
              </InfoTime>
              <Text>Прямой</Text>
            </MainDown>
            <MainDown>
              <InfoTime>
                <Text>
                  <Plane alt="plane" src={planeReverse} />
                  10:35 - 17:10
                </Text>
                <Text>
                  <Watch alt="watch" src={watch} />
                  4 ч 35 м
                </Text>
              </InfoTime>
              <Text>Прямой</Text>
            </MainDown>
          </Main>
        </div>
      </Card>
      <Card>
        <PromoFast>
          <div className="container">
            <PromoInfo>
              <Title>Самый быстрый</Title>
              <Image alt="smile" src={light} />
            </PromoInfo>
          </div>
        </PromoFast>
        <div className="container">
          <Main>
            <MainUp>
              <Price>9 269 ₽</Price>
              <Company alt="Russia" src={fly} />
            </MainUp>
            <MainDown>
              <InfoTime>
                <Text>
                  <Plane alt="plane" src={plane} />
                  07:30 - 09:50
                </Text>
                <Text>
                  <Watch alt="watch" src={watch} />
                  4 ч 20 м
                </Text>
              </InfoTime>
              <Text>Прямой</Text>
            </MainDown>
            <MainDown>
              <InfoTime>
                <Text>
                  <Plane alt="plane" src={planeReverse} />
                  11:20 - 17:35
                </Text>
                <Text>
                  <Watch alt="watch" src={watch} />
                  4 ч 15 м
                </Text>
              </InfoTime>
              <Text>CDG</Text>
            </MainDown>
          </Main>
        </div>
      </Card>
      <Card>
        <PromoBest>
          <div className="container">
            <PromoInfo>
              <Title>Самый лучший</Title>
              <Image alt="smile" src={love} />
            </PromoInfo>
          </div>
        </PromoBest>
        <div className="container">
          <Main>
            <MainUp>
              <Price>8 029 ₽</Price>
              <Company alt="Russia" src={nordwind} />
            </MainUp>
            <MainDown>
              <InfoTime>
                <Text>
                  <Plane alt="plane" src={plane} />
                  00:15 - 03:10
                </Text>
                <Text>
                  <Watch alt="watch" src={watch} />
                  4 ч 55 м
                </Text>
              </InfoTime>
              <Text>Прямой</Text>
            </MainDown>
            <MainDown>
              <InfoTime>
                <Text>
                  <Plane alt="plane" src={planeReverse} />
                  10:45 - 17:15
                </Text>
                <Text>
                  <Watch alt="watch" src={watch} />
                  4 ч 30 м
                </Text>
              </InfoTime>
              <Text>Прямой</Text>
            </MainDown>
          </Main>
        </div>
      </Card>
      <Card>
        <div className="container">
          <Main>
            <MainUp>
              <Price>8 164 ₽</Price>
              <Company alt="Russia" src={nordair} />
            </MainUp>
            <MainDown>
              <InfoTime>
                <Text>
                  <Plane alt="plane" src={plane} />
                  00:15 - 03:10
                </Text>
                <Text>
                  <Watch alt="watch" src={watch} />
                  4 ч 55 м
                </Text>
              </InfoTime>
              <Text>Прямой</Text>
            </MainDown>
            <MainDown>
              <InfoTime>
                <Text>
                  <Plane alt="plane" src={planeReverse} />
                  10:45 - 17:15
                </Text>
                <Text>
                  <Watch alt="watch" src={watch} />
                  4 ч 30 м
                </Text>
              </InfoTime>
              <Text>Прямой</Text>
            </MainDown>
          </Main>
        </div>
      </Card>
      <Card>
        <div className="container">
          <Main>
            <MainUp>
              <Price>8 240 ₽</Price>
              <Company alt="Russia" src={redwings} />
            </MainUp>
            <MainDown>
              <InfoTime>
                <Text>
                  <Plane alt="plane" src={plane} />
                  07:00 - 09:30
                </Text>
                <Text>
                  <Watch alt="watch" src={watch} />
                  4 ч 30 м
                </Text>
              </InfoTime>
              <Text>Прямой</Text>
            </MainDown>
            <MainDown>
              <InfoTime>
                <Text>
                  <Plane alt="plane" src={planeReverse} />
                  11:00 - 17:10
                </Text>
                <Text>
                  <Watch alt="watch" src={watch} />
                  4 ч 10 м
                </Text>
              </InfoTime>
              <Text>Прямой</Text>
            </MainDown>
          </Main>
        </div>
      </Card>
      <Card>
        <div className="container">
          <Main>
            <MainUp>
              <Price>9 108 ₽</Price>
              <Companies>
                <CompanyIcon alt="Russia" src={rusicon} />
                <CompanyIcon alt="Red" src={redicon} />
              </Companies>
            </MainUp>
            <MainDown>
              <InfoTime>
                <Text>
                  <Plane alt="plane" src={plane} />
                  00:05 - 03:05
                </Text>
                <Text>
                  <Watch alt="watch" src={watch} />
                  5 ч
                </Text>
              </InfoTime>
              <Text>Прямой</Text>
            </MainDown>
            <MainDown>
              <InfoTime>
                <Text>
                  <Plane alt="plane" src={planeReverse} />
                  11:00 - 17:10
                </Text>
                <Text>
                  <Watch alt="watch" src={watch} />
                  4 ч 10 м
                </Text>
              </InfoTime>
              <Text>Прямой</Text>
            </MainDown>
          </Main>
        </div>
      </Card>
      <Card>
        <div className="container">
          <Main>
            <MainUp>
              <Price>9 485 ₽</Price>
              <Companies>
                <CompanyIcon alt="Russia" src={rusicon} />
                <CompanyIcon alt="Fly" src={flyicon} />
              </Companies>
            </MainUp>
            <MainDown>
              <InfoTime>
                <Text>
                  <Plane alt="plane" src={plane} />
                  00:05 - 03:05
                </Text>
                <Text>
                  <Watch alt="watch" src={watch} />
                  5 ч
                </Text>
              </InfoTime>
              <Text>Прямой</Text>
            </MainDown>
            <MainDown>
              <InfoTime>
                <Text>
                  <Plane alt="plane" src={planeReverse} />
                  11:20 - 17:35
                </Text>
                <Text>
                  <Watch alt="watch" src={watch} />
                  4 ч 15 м
                </Text>
              </InfoTime>
              <Text>Прямой</Text>
            </MainDown>
          </Main>
        </div>
      </Card>
    </div>
  );
};
