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

const Content = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  min-height: 270px;
  background-color: #fff;
  @media screen and (min-width: 768px) {
    flex-basis: 50%;
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 16px 21px 16px;
  background-color: #cd2027;
  position: relative;
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
  justify-content: space-between;
  background-color: #fff;
  padding-top: 20px;
  min-height: 207px;
`;

const CardUp = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  padding-bottom: 24px;
`;

const Logo = styled.img`
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 25px;
  }
`;

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

const Icon = styled.img`
  width: 38px;
  height: 38px;
  position: absolute;
  right: 16px;
`;

const ContentInfo = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 24px;
  }
`;

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
  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
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
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export default () => {
  return (
    <SpecialOffer>
      <div className="container">
        <TitleSpecialOffer>Спецпредложения на авиабилеты</TitleSpecialOffer>
        <Content>
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
              <AdsCard>Специальное предложение от авиакомпании Победа</AdsCard>
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
              <AdsCard>
                Из Москвы В США от 20680 рублей! Специальное предложение от
                авиакомпании Lufthansa
              </AdsCard>
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
              <AdsCard>
                Из Москвы В США от 22360 рублей! Специальное предложение от
                авиакомпании Lufthansa
              </AdsCard>
              <ButtonCard>Узнать подробности</ButtonCard>
            </MainCard>
          </Card>
        </Content>
        <ContentInfo>
          <LinkAllOffer>Смотреть все спецпредложения</LinkAllOffer>
          <Text>* средняя цена по направлению</Text>
        </ContentInfo>
      </div>
    </SpecialOffer>
  );
};
