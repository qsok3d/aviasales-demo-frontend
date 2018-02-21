import React, { Component } from "react";
import styled from "styled-components";
import Arrow from "./BackArrow.svg";

const Header = styled.header`
  background-color: #00b0de;
  background: linear;
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderBack = styled.a``;

const BackArrow = styled.img``;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Direction = styled.p`
  color: #fff;
  margin: 0;
  padding-top: 10px;
  font-size: 16px;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 500;
  line-height: 20px;
`;

const Information = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const HeaderDate = styled.p`
  color: #fff;
  margin: 0;
  font-size: 12px;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 500;
  line-height: 16px;
`;

const Passanger = styled.p`
  color: #fff;
  margin: 0;
  font-size: 12px;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 500;
  line-height: 16px;
`;

const MoneyButton = styled.button`
  color: #fff;
  border: 1px solid #fff;
  background-color: transparent;
  border-radius: 100px;
  font-size: 14px;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 500;
  line-height: 16px;
  padding: 6px 12px;
`;

export default () => {
  return (
    <Header>
      <div className="container">
        <Content>
          <HeaderBack>
            <BackArrow alt="back" src={Arrow} />
          </HeaderBack>
          <Main>
            <Direction>Москва - Барселона</Direction>
            <Information>
              <HeaderDate>24 фев - 3 март, </HeaderDate>
              <Passanger>1 пассажир</Passanger>
            </Information>
          </Main>
          <MoneyButton>RUB</MoneyButton>
        </Content>
      </div>
    </Header>
  );
};
