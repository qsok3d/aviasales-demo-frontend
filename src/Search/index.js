import React, { Component } from "react";
import Header from "./Header";
import Card from "./Card";
import styled from "styled-components";

const Main = styled.div`
  background-color: #eaeaea;
  padding: 10px 0;
`;

const Button = styled.button`
  background-color: #00ace2;
  color: #fff;
  padding: 6px 16px;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  margin: 0 auto;
  display: block;
  margin-bottom: 16px;
`;

const ButtonDown = Button.extend`
  padding: 10px 24px;
`;

export default () => {
  return (
    <div>
      <Header />
      <Main>
        <Button>НАВЕРХ</Button>
        <Card />
        <ButtonDown>Фильтровать</ButtonDown>
      </Main>
    </div>
  );
};
