import React from "react";
import styled from "styled-components";
import vk from "./vk.svg";
import facebook from "./face.svg";
import insta from "./insta.svg";
import twitter from "./twitter.svg";
import viber from "./viber.svg";
import apple from "./AppStore.svg";
import google from "./Google.svg";
import Windows from "./Win.svg";

const Footer = styled.footer`
  background-color: #fff;
  padding-top: 32px;
`;

const Title = styled.h3`
  color: #4a4a4a;
  font-size: 0.875rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 600;
  margin: 0;
  line-height: 1.33;
  padding-top: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 31px;
`;

const Link = styled.a`
  color: #5b5b5c;
  font-size: 0.875rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.33;
  padding-top: 12px;
`;

const LinkNav = Link.extend`
  padding-right: 9px;
`;

const MainLink = styled.a`
  color: #5b5b5c;
  font-size: 0.875rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 600;
  margin: 0;
  line-height: 1.33;
  padding-top: 16px;
`;

const AboutFooter = styled.div`
  border-top: 1px solid #e0e6e8;
  @media screen and (min-width: 1024px) {
    border-top: none;
  }
`;

const AboutNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding-top: 24px;
`;

const SocialNetwork = styled.div`
  padding-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;

const Social = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 33%;
  align-items: center;
  padding-bottom: 12px;
  @media screen and (min-width: 768px) {
    flex-basis: auto;
  }
`;

const SocialLink = styled.a`
  color: #4a4a4a;
  font-size: 0.875rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.33;
  padding-right: 12px;
`;

const SocialImage = styled.img`
  padding-right: 3px;
`;

const Text = styled.p`
  color: #4a4a4a;
  font-size: 0.875rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.33;
  display: block;
  text-align: center;
  padding-top: 24px;
  padding-bottom: 16px;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const Download = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const DownloadLink = styled.a`
  padding-bottom: 8px;
  @media screen and (min-width: 768px) {
    padding-right: 10px;
  }
`;

const Image = styled.img``;

const FinalText = styled.p`
  color: #5b5b5c;
  font-size: 12px;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.33;
  padding-top: 24px;
  padding-bottom: 24px;
  display: block;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const FooterDown = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e0e6e8;
  }
`;

const FooterLeft = styled.div``;
const FooterRight = styled.div``;

export default () => {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>СТРАНЫ</Title>
            <Nav>
              <Link>Россия</Link>
              <Link>Таиланд</Link>
              <Link>Черногория</Link>
              <Link>Кипр</Link>
              <Link>Болгария</Link>
              <Link>Гразия</Link>
              <MainLink>Все страны</MainLink>
            </Nav>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>ГОРОДА</Title>
            <Nav>
              <Link>Москва</Link>
              <Link>Санкт-Петербург</Link>
              <Link>Симферополь</Link>
              <Link>Адлер</Link>
              <Link>Екатеринбург</Link>
              <Link>Лондон</Link>
              <MainLink>Все города</MainLink>
            </Nav>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>АВИАКОМПАНИИ</Title>
            <Nav>
              <Link>Air Berlin</Link>
              <Link>Air France</Link>
              <Link>Alitalia</Link>
              <Link>Air Baltica</Link>
              <Link>Emirates</Link>
              <Link>KLM</Link>
              <MainLink>Все авиакомпании</MainLink>
            </Nav>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>АЭРОПОРТЫ</Title>
            <Nav>
              <Link>Шеремтьево</Link>
              <Link>Курумоч</Link>
              <Link>Домодедово</Link>
              <Link>Толмачево</Link>
              <Link>Владивосток</Link>
              <Link>Гамбург</Link>
              <MainLink>Все аэропорты</MainLink>
            </Nav>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>Направления</Title>
            <Nav>
              <Link>MOW-SIP</Link>
              <Link>MOW-AER</Link>
              <Link>MOW-TIV</Link>
              <Link>MOW-MRV</Link>
              <Link>LED-MOW</Link>
              <Link>MOW-BKK</Link>
            </Nav>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>Сервисы</Title>
            <Nav>
              <Link>Горящие авибилеты</Link>
              <Link>Календар низких цен</Link>
              <Link>Карта низких цен</Link>
              <Link>Спецпредложение</Link>
              <Link>Таблица цен</Link>
              <Link>Блог</Link>
              <Link>Помощь</Link>
            </Nav>
          </div>
        </div>
        <FooterDown>
          <FooterLeft>
            <AboutFooter>
              <AboutNav>
                <LinkNav>О компании</LinkNav>
                <LinkNav>Партнёрская программа</LinkNav>
                <LinkNav>Реклама</LinkNav>
                <LinkNav>Вакансии</LinkNav>
                <LinkNav>Помощь</LinkNav>
                <LinkNav>Правила</LinkNav>
                <LinkNav>White Label авиабилеты</LinkNav>
              </AboutNav>
            </AboutFooter>
            <SocialNetwork>
              <Social>
                <SocialImage alt="vk" src={vk} />
                <SocialLink>Вконтакте</SocialLink>
              </Social>
              <Social>
                <SocialImage alt="face" src={facebook} />
                <SocialLink>Фейсбук</SocialLink>
              </Social>
              <Social>
                <SocialImage alt="insta" src={insta} />
                <SocialLink>Инстаграм</SocialLink>
              </Social>
              <Social>
                <SocialImage alt="twitter" src={twitter} />
                <SocialLink>Твиттер</SocialLink>
              </Social>
              <Social>
                <SocialImage alt="viber" src={viber} />
                <SocialLink>Вайбер</SocialLink>
              </Social>
            </SocialNetwork>
            <Text>Поиск и бронирование отелей</Text>
          </FooterLeft>
          <FooterRight>
            <Download>
              <DownloadLink>
                <Image alt="apple" src={apple} />
              </DownloadLink>
              <DownloadLink>
                <Image alt="google" src={google} />
              </DownloadLink>
              <DownloadLink>
                <Image alt="win" src={Windows} />
              </DownloadLink>
            </Download>
            <FinalText>© 2007–2018, Aviasales — дешевые авиабилеты</FinalText>
          </FooterRight>
        </FooterDown>
      </div>
    </Footer>
  );
};
