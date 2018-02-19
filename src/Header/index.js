import React from "react";
import styled from "styled-components";
import logoImage from "./aviasales.svg";
import arrow from "./arrow.svg";
import calendar from "./calendar.svg";
import aero from "./aero.svg";
import dropdown from "./dropdown.svg";

const Title = styled.h1`
  font-size: 1.2rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 600;
  color: #fff;
  line-height: 1.15;
  padding-top: 47px;
  margin: 0;
  text-align: center;
  padding-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
    line-height: 1.5;
  }
  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
    line-height: 1.2;
    padding-top: 137px;
  }
`;

const SubTitle = styled.h2`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-size: 1.2rem;
    font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
    font-weight: 600;
    color: #fff;
    line-height: 1.15;
    padding-top: 0.5rem;
    margin: 0;
    text-align: center;
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
    line-height: 1.16;
    padding-top: 8px;
  }
`;

const Logo = styled.img`
  width: 30px;
  height: 29px;
  padding-top: 12px;
`;

const LogoText = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline;
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.3;
    font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
    font-weight: 400;
    color: #fff;
    padding-top: 12px;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

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

const Form = styled.div`
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    padding: 0 64px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const FormInput = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  margin-bottom: 2px;

  @media screen and (min-width: 48rem) {
    flex-basis: calc(50% - 1px);
    max-width: calc(50% - 1px);
    margin-right: 2px;
  }

  @media screen and (min-width: 1024px) {
    flex-basis: auto;
    margin-right: 2px;
  }
`;

const FormInputArrive = FormInput.extend`
  @media screen and (min-width: 48rem) {
    flex-basis: calc(50% - 1px);
    max-width: calc(50% - 1px);
    margin-right: 0;
  }
  @media screen and (min-width: 1024px) {
    flex-basis: auto;
  }
`;

const FormInputPass = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  margin-bottom: 2px;
  @media screen and (min-width: 48rem) {
    flex-basis: calc(50% - 1px);
    max-width: calc(50% - 1px);
  }

  @media screen and (min-width: 1024px) {
    flex-basis: auto;
    margin-left: 2px;
  }
`;

const Input = styled.input`
  padding: 18px 16px;
  border: none;
  color: #4a4a4a;
  @media screen and (min-width: 48rem) {
    width: 100%;
  }
`;

const Arrow = styled.img`
  width: 16px;
  height: 18px;
  position: absolute;
  bottom: 15px;
  right: 16px;
`;

const TextCity = styled.span`
  font-size: 1rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 500;
  color: #a0b0b9;
  line-height: 1.25;
  position: absolute;
  bottom: 15px;
  right: 42px;
`;

const FormInputCalendar = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 2px;
  @media screen and (min-width: 48rem) {
    width: calc(50% - 1px);
    margin-right: 2px;
  }

  @media screen and (min-width: 1024px) {
    flex-basis: auto;
  }
`;

const CalendarDepart = styled.div`
  margin-right: 2px;
  position: relative;
  @media screen and (min-width: 48rem) {
    flex-basis: calc(50% - 1px);
    max-width: calc(50% - 1px);
  }
`;

const CalendarReturn = styled.div`
  position: relative;
  @media screen and (min-width: 48rem) {
    flex-basis: calc(50% - 1px);
    max-width: calc(50% - 1px);
  }
`;

const InputCalendar = styled.input`
  padding: 18px 16px 18px 22px;
  border: none;
  color: #4a4a4a;
  width: 100%;
  @media screen and (min-width: 1048px) {
    margin-left: 2px;
  }
`;

const CalendarButton = styled.button`
  position: absolute;
  bottom: 18px;
  right: 16px;
  border: none;
  background-color: #fff;
`;

const Calendar = styled.img`
  display: block;
  width: 17px;
  height: 20px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    padding-bottom: 254px;
  }
`;

const ButtonFindTicket = styled.button`
  border: none;
  background-color: #ff9241;
  padding: 14px 93px 14px 52px;
  color: #fff;
  font-size: 1.5rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 88px;
  &:after {
    content: url(${aero});
    position: absolute;
    padding-left: 16px;
  }
`;

const DropdownButton = styled.button`
  border: none;
  background-color: #fff;
  position: absolute;
  right: 16px;
  top: 15px;
`;

const DropdownImage = styled.img`
  width: 10px;
  height: 5px;
`;

export default () => {
  return (
    <Header>
      <div className="container">
        <Link>
          <Logo alt="Logo" src={logoImage} />
          <LogoText>aviasales</LogoText>
        </Link>
        <Title>Поиск дешевых авиабилетов</Title>
        <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
        <Form>
          <FormInput>
            <Input placeholder="Москва" />
            <TextCity>MOW</TextCity>
            <Arrow alt="Arrow" src={arrow} />
          </FormInput>
          <FormInputArrive>
            <Input placeholder="Город прибытия" />
          </FormInputArrive>
          <FormInputCalendar>
            <CalendarDepart>
              <InputCalendar placeholder="Туда" />
              <CalendarButton>
                <Calendar alt="Calendar" src={calendar} />
              </CalendarButton>
            </CalendarDepart>
            <CalendarReturn>
              <InputCalendar placeholder="Обратно" />
              <CalendarButton>
                <Calendar alt="Calendar" src={calendar} />
              </CalendarButton>
            </CalendarReturn>
          </FormInputCalendar>
          <FormInputPass>
            <Input placeholder="1 пассажир, экокном" />
            <DropdownButton>
              <DropdownImage alt="dropdown" src={dropdown} />
            </DropdownButton>
          </FormInputPass>
        </Form>
        <Button>
          <ButtonFindTicket>Найти билеты</ButtonFindTicket>
        </Button>
      </div>
    </Header>
  );
};
