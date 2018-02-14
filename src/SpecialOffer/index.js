import React from "react";
import styled from "styled-components";
import pobeda from "./pobeda.svg";
import luft from "./luft.svg";
import icon from "./icon.svg";

const SpecialOffer = styled.div`
  margin-top: 40px;
  background-color: #00b0de;
  background: linear;
  background: linear-gradient(#00b0de 0%, #196ebd 100%);
`;

const TitleSpecialOffer = styled.h2`
  padding-top: 16px;
  padding-bottom: 24px;
  color: #fff;
  font-size: 1.75rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 500;
  margin: 0;
  line-height: 1.17;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 16px 21px 16px;
  background-color: #cd2027;
`;

const TitleCard = styled.p`
  color: #fff;
  font-size: 1rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 500;
  margin: 0;
  line-height: 1.25;
`;

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding-top: 20px;
`;

const CardUp = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  padding-bottom: 24px;
`;

const Logo = styled.img``;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CostCard = styled.span`
  color: #5c5c5c;
  font-size: 1.25rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 0.8;
  &:before {
    content: "от";
    position: relative;
    color: #5c5c5c;
    font-size: 1rem;
    font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
    font-weight: 400;
    margin: 0;
    line-height: 1.25;
    padding-right: 4px;
  }
`;

const DayCard = styled.p`
  color: #d93633;
  font-size: 0.75rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.25;
`;

const AdsCard = styled.span`
  color: #242424;
  font-size: 0.75rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.25;
  padding: 0 8px;
`;

const ButtonCard = styled.button`
  border: 2px solid #cd1f27;
  margin: 27px 8px 16px 8px;
  color: #d93533;
  background-color: #fff;
  padding: 10px 0;
`;

const Icon = styled.img``;

const LinkAllOffer = styled.a`
  display: block;
  text-align: center;
  text-decoration: underline;
  padding-top: 32px;
  color: #fff;
  font-size: 1rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.25;
`;

const Text = styled.p`
  display: block;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 24px;
  color: #fff;
  font-size: 1rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.25;
`;

export default () => {
  return (
    <SpecialOffer>
      <div className="container">
        <TitleSpecialOffer>Спецпредложения на авиабилеты</TitleSpecialOffer>
        <Card>
          <HeaderCard>
            <TitleCard>Билеты от 499 рублей!</TitleCard>
          </HeaderCard>
          <MainCard>
            <CardUp>
              <Logo alt="pobeda" src={pobeda} />
              <CardInfo>
                <CostCard>499 ₽</CostCard>
                <DayCard>Осталость 45 дней</DayCard>
              </CardInfo>
            </CardUp>
            <AdsCard>Билеты от 499 рублей!</AdsCard>
            <AdsCard>Специальное предложение от авиакомпании</AdsCard>
            <AdsCard>Победа</AdsCard>
            <ButtonCard>Узнать подробности</ButtonCard>
          </MainCard>
        </Card>
        <Card>
          <HeaderCard>
            <TitleCard>В Нью-Йорк от 20 680 ₽</TitleCard>
            <Icon alt="icon" src={icon} />
          </HeaderCard>
          <MainCard>
            <CardUp>
              <Logo alt="luft" src={luft} />
              <CardInfo>
                <CostCard>20 680 ₽</CostCard>
                <DayCard>Осталость 19 дней</DayCard>
              </CardInfo>
            </CardUp>
            <AdsCard>Из Москвы В США от 20680 рублей! Специальное</AdsCard>
            <AdsCard>предложение от авиакомпании Lufthansa</AdsCard>
            <ButtonCard>Узнать подробности</ButtonCard>
          </MainCard>
        </Card>
        <Card>
          <HeaderCard>
            <TitleCard>В Лос-Анджелес от...</TitleCard>
            <Icon alt="icon" src={icon} />
          </HeaderCard>
          <MainCard>
            <CardUp>
              <Logo alt="luft" src={luft} />
              <CardInfo>
                <CostCard>20 350 ₽</CostCard>
                <DayCard>Осталость 19 дней</DayCard>
              </CardInfo>
            </CardUp>
            <AdsCard>Из Москвы В США от 22360ы рублей! Специальное</AdsCard>
            <AdsCard>предложение от авиакомпании Lufthansa</AdsCard>
            <ButtonCard>Узнать подробности</ButtonCard>
          </MainCard>
        </Card>
        <LinkAllOffer>Смотреть все спецпредложения</LinkAllOffer>
        <Text>* средняя цена по направлению</Text>
      </div>
    </SpecialOffer>
  );
};
