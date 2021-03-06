import React from "react";
import styled from "styled-components";
import plane from "./icon-plane.png";
import mail from "./icon-mail.png";
import list from "./icon-list.png";

const Description = styled.div`
  background-color: #ffffff;
  padding-bottom: 24px;
`;

const Title = styled.h2`
  margin: 0;
`;

const TextTitle = styled.p`
  color: #4a4a4a;
  font-size: 0.81rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 700;
  margin: 0;
  line-height: 1.35;
  padding-top: 16px;
  padding-left: 24px;
  background: url(${plane}) no-repeat left bottom;
`;

const TitleMail = TextTitle.extend`
  background: url(${mail}) no-repeat left bottom;
`;

const TitleList = TextTitle.extend`
  background: url(${list}) no-repeat left bottom;
`;

const MainText = styled.p`
  padding-top: 12px;
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
          <TextTitle>КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?</TextTitle>
          <MainText>
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
          </MainText>
        </Title>
        <Title>
          <TitleMail>ЭЛЕКТРОННЫЙ АВИАБИЛЕТ</TitleMail>
          <MainText>
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
          </MainText>
        </Title>
        <Title>
          <TitleList>20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ</TitleList>
          <MainText>
            Есть масса путеводителей по странам, но ни одного о том, как
            провести время в самолете. Для того, чтобы сделать ваш перелет
            максимально комфортным, мы написали 20 советов о подготовке к
            путешествию. Ведь настоящее путешествие начинается со слов «Добро
            пожаловать на борт нашего самолета»!
          </MainText>
        </Title>
      </div>
    </Description>
  );
};
