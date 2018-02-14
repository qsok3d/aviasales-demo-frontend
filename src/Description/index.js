import React from "react";
import styled from "styled-components";
import icon from "./icon.svg";

const Description = styled.div`
  background-color: #ffffff;
`;

const Title = styled.div`
  padding: 20px 0;
`;

const TitleText = styled.h2`
  color: #4a4a4a;
  font-size: 0.81rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 700;
  margin: 0;
  line-height: 1.35;
  &:before {
    content: url(${icon});
    position: relative;
    padding-right: 10px;
  }
`;

const Main = styled.p`
  padding-top: 22px;
  color: #4a4a4a;
  font-size: 0.875rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.4;
  &:after {
    content: "Подробнее";
    position: relative;
    color: #00ace2;
    padding-left: 10px;
  }
`;

export default () => {
  return (
    <Description>
      <div className="container">
        <Title>
          <TitleText>КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?</TitleText>
          <Main>
            Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на
            самолет по сотням авиакомпаний и находим за считанные минуты самые
            дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь
            нашим поиском, который совершенно бесплатно сравнивает цены на
            авиабилеты онлайн и находит самые дешевые перелеты. Больше нет
            смысла ходить в авиакассы, обзванивать агентства — дешевый билет
            находится на расстоянии клика. На нашем сайте вы можете подобрать
            дешевые билеты на самолет в Европу, Азию и на другие континенты. Мы
            написали для вас простую инструкцию о том, как пользоваться поиском
            и экономить на перелетах от 1000 до 20 000 руб в год.
          </Main>
        </Title>
        <Title>
          <TitleText>КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?</TitleText>
          <Main>
            Электронный авиабилет — это, по сути, обычный билет на самолет, но
            только в менее привычном для путешественника виде. Вся информация об
            авиаперелете (данные пассажира, маршрут следования) хранится в
            электронной базе, а пассажир получает на руки маршрут-квитанцию.
            Некоторые пассажиры, купив авиабилет онлайн и получив
            маршрут-квитанцию, удивлены ее видом — это обыкновенный лист формата
            А4, на котором распечатана вся информация о предстоящем перелете.
            Однако это действительно официальный документ, подтверждающий
            договор между авиаперевозчиком и пассажиром. При регистрации на рейс
            пассажир должен предъявить маршрут-квитанцию вместе с удостоверением
            личности точно так же, как предъявляют обыкновенный бумажный билет.
            Следует отметить, что электронный билет, приобретенный онлайн, стоит
            дешевле своего бумажного аналога
          </Main>
        </Title>
        <Title>
          <TitleText>20 советоа авиапутешественникам</TitleText>
          <Main>
            Есть масса путеводителей по странам, но ни одного о том, как
            провести время в самолете. Для того, чтобы сделать ваш перелет
            максимально комфортным, мы написали 20 советов о подготовке к
            путешествию. Ведь настоящее путешествие начинается со слов «Добро
            пожаловать на борт нашего самолета»!
          </Main>
        </Title>
      </div>
    </Description>
  );
};
