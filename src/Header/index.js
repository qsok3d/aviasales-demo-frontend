import React from "react";
import styled from "styled-components";
import logoImage from "./aviasales.svg";
import arrow from "./arrow.svg";
import calendar from "./calendar.svg";
import aero from "./aero.svg";

const Title = styled.h1`
  font-size: 1.25rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 600;
  color: #fff;
  line-height: 1.15;
  padding-top: 47px;
  margin: 0;
  text-align: center;
`;

const Logo = styled.img`
  display: block;
  width: 30px;
  height: 29px;
  padding-top: 12px;
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

const Link = styled.a``;

const Input = styled.input`
  padding: 18px 16px 18px 22px;
  border: none;
  color: #4a4a4a;
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
  padding-top: 16px;
`;

const FormInput = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  margin-bottom: 2px;
`;

const FormInputCalendar = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 2px;
`;

const CalendarDepart = styled.div`
  margin-right: 2px;
  position: relative;
`;

const CalendarReturn = styled.div``;

const InputCalendar = styled.input`
  padding: 18px 16px 18px 22px;
  border: none;
  color: #4a4a4a;
  width: 100%;
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

export default () => {
  return (
    <Header>
      <div className="container">
        <Link>
          <Logo alt="Logo" src={logoImage} />
        </Link>
        <Title>Поиск дешевых авиабилетов</Title>
        <Form>
          <FormInput>
            <Input placeholder="Москва" />
            <TextCity>MOW</TextCity>
            <Arrow alt="Arrow" src={arrow} />
          </FormInput>
          <FormInput>
            <Input placeholder="Город прибытия" />
          </FormInput>
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
          <FormInput>
            <Input placeholder="1 пассажир, экокном" />
          </FormInput>
        </Form>
        <ButtonFindTicket>Найти билеты</ButtonFindTicket>
      </div>
    </Header>
  );
};
