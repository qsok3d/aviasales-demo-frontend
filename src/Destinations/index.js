import React from "react";
import styled from "styled-components";
import compass from "./compass.svg";
import pen from "./pen.svg";
import child from "./child.svg";
import night from "./night.svg";
import palm from "./palm.svg";
import shopping from "./shopping.svg";
import world from "./world.svg";
import culture from "./culture.svg";
import krasnodar from "./Krasnodar.png";
import adler from "./Adler.png";
import piter from "./Piter.png";
import simferopol from "./Simferopol.png";
import minwater from "./MinWater.png";
import barsa from "./Barsa.png";
import month from "./month.svg";
import russia from "./russia.png";
import armenia from "./armenia.png";
import moldavia from "./moldavia.png";
import spain from "./spain.png";

const Destinations = styled.section`
  background-color: #f8fcff;
  @media screen and (min-width: 768px) {
    padding: 0 64px;
  }
`;

const Logo = styled.div`
  padding-top: 40px;
  padding-bottom: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Compass = styled.img`
  width: 64px;
  height: 64px;
  display: block;
  margin: 0 auto;
`;

const Title = styled.h2``;

const Text = styled.span`
  display: block;
  font-size: 18px;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  line-height: 1.3;
  color: #black;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
    padding: 0 85px;
  }
`;

const City = styled.span`
  display: block;
  font-size: 1.125rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  line-height: 1.3;
  color: #00ace2;
  text-align: center;
  padding-bottom: 32px;
  &:after {
    content: url(${pen});
    position: absolute;
    padding-left: 7px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
  }
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    padding-bottom: 56px;
  }
`;

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  margin-bottom: 21px;
  box-sizing: border-box;
  &:active {
    border-bottom: 1px solid #00ace2;
    color: #5c5c5c;
  }
`;

const CategoryText = styled.p`
  font-size: 1rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  line-height: 1.65;
  color: #00ace2;
  text-align: center;
  margin: 0;
  &:active {
    color: #5c5c5c;
  }
`;

const CategoryImage = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  box-shadow: 0 1px 3px 0 rgba(91, 137, 163, 0.15);
  position: relative;
  margin-bottom: 12px;
`;

const Image = styled.img`
  width: 22px;
  height: 22px;
  background-color: #fff;
  border-radius: 16px;
  position: absolute;
  top: 13px;
  left: 13px;
`;

const DestCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 2px rgba(0, 75, 93, 0.12);
  border-radius: 8px 8px;
  margin-bottom: 12px;
`;

const CardImage = styled.img`
  padding-bottom: 1rem;
  border-radius: 8px 8px 0 0;
  @media screen and (min-width: 768px) {
    width: 624px;
    height: 294px;
  }
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 16px;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const CardCity = styled.h2`
  font-size: 1rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 500;
  line-height: 1.25;
  color: #5b5b5c;
  margin: 0;
  padding-bottom: 4px;
  @media screen and (min-width: 768px) {
    position: relative;
    padding-left: 72px;
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 1.45;
  }
`;

const CardCountry = styled.p`
  font-size: 0.75rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  line-height: 1.25;
  color: #a0b0b9;
  margin: 0;
  padding-bottom: 12px;
  @media screen and (min-width: 768px) {
    font-weight: 500;
    padding-left: 72px;
  }
`;

const CardPrice = styled.a`
  color: #00bae8;
  font-size: 0.875rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  line-height: 1;
  padding-bottom: 4px;
  @media screen and (min-width: 768px) {
    font-size: 1.375rem;
    font-weight: 500;
    line-height: 1.45;
    padding-right: 1rem;
  }
`;

const CardDate = styled.p`
  font-size: 0.75rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  line-height: 1.25;
  color: #a0b0b9;
  margin: 0;
  @media screen and (min-width: 768px) {
    padding-right: 1rem;
  }
`;

const LogoBest = styled.div`
  padding-top: 72px;
  padding-bottom: 20px;

  display: flex;
  justify-content: center;
`;

const Month = styled.img`
  width: 60px;
  height: 60px;
`;

const Direction = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
`;

const Flag = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;
`;

const FlagCard = styled.img`
  display: none;
  width: 30px;
  height: 30px;
  @media screen and (min-width: 768px) {
    display: inline;
    position: absolute;
    left: 25px;
    box-shadow: rgba(38, 38, 38, 0.1);
  }
`;

const DirectionDesc = styled.div`
  display: flex;
  flex-direction: column;
`;

const DirCity = styled.p`
  color: #5b5b5c;
  font-size: 1.375rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 500;
  line-height: 1.45;
  margin: 0;
`;

const DirCountry = styled.p`
  color: #a0b0b9;
  font-size: 0.75rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.65;
`;

const DirectionList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const DirectionLine = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

const DirFrom = styled.p`
  color: #4a4a4a;
  font-size: 1rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.25;
`;

const DirCost = styled.a`
  color: #00bae8;
  font-size: 1rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.25;
`;

const AddText = styled.p`
  padding-top: 40px;
  color: #4a4a4a;
  font-size: 1rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.5;
  text-align: center;
`;

const OffertaText = styled.p`
  padding-top: 24px;
  color: #a0b0b9;
  font-size: 0.875rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.4;
  text-align: center;
`;

export default () => {
  return (
    <Destinations>
      <div className="container">
        <Logo>
          <Compass alt="compass" src={compass} />
        </Logo>

        <Text>Популярные направления перелетов из города</Text>
        <City>Москва</City>

        <Category>
          <CategoryCard>
            <CategoryImage>
              <Image alt="world" src={world} />
            </CategoryImage>
            <CategoryText>КУДА УГОДНО</CategoryText>
          </CategoryCard>
          <CategoryCard>
            <CategoryImage>
              <Image alt="palm" src={palm} />
            </CategoryImage>
            <CategoryText>СОЛНЦЕ И МОРЕ</CategoryText>
          </CategoryCard>
          <CategoryCard>
            <CategoryImage>
              <Image alt="shopping" src={shopping} />
            </CategoryImage>
            <CategoryText>ШОППИНГ, ГОРОД</CategoryText>
          </CategoryCard>
          <CategoryCard>
            <CategoryImage>
              <Image alt="culture" src={culture} />
            </CategoryImage>
            <CategoryText>КУЛЬТУРА И ИСТОРИЯ</CategoryText>
          </CategoryCard>
          <CategoryCard>
            <CategoryImage>
              <Image alt="night" src={night} />
            </CategoryImage>
            <CategoryText>НОЧНАЯ ЖИЗНЬ</CategoryText>
          </CategoryCard>
          <CategoryCard>
            <CategoryImage>
              <Image alt="child" src={child} />
            </CategoryImage>
            <CategoryText>ОТДЫХ С ДЕТЬМИ</CategoryText>
          </CategoryCard>
        </Category>
        <DestCard>
          <Card>
            <CardImage alt="krasnodar" src={krasnodar} />
            <CardInfo>
              <CardCity>
                <FlagCard alt="flag" src={russia} />Краснодар
              </CardCity>
              <CardPrice>Найти от 1 212 ₽</CardPrice>
            </CardInfo>
            <CardInfo>
              <CardCountry>Россия</CardCountry>
              <CardDate>18 марта</CardDate>
            </CardInfo>
          </Card>
          <Card>
            <CardImage alt="adler" src={adler} />
            <CardInfo>
              <CardCity>
                <FlagCard alt="flag" src={russia} />Сочи(Адлер)
              </CardCity>
              <CardPrice>Найти от 1 334 ₽</CardPrice>
            </CardInfo>
            <CardInfo>
              <CardCountry>Россия</CardCountry>
              <CardDate>27 марта</CardDate>
            </CardInfo>
          </Card>
          <Card>
            <CardImage alt="piter" src={piter} />
            <CardInfo>
              <CardCity>
                <FlagCard alt="flag" src={russia} />Санкт-Петербург
              </CardCity>
              <CardPrice>Найти от 1 508 ₽</CardPrice>
            </CardInfo>
            <CardInfo>
              <CardCountry>Россия</CardCountry>
              <CardDate>19 феврался</CardDate>
            </CardInfo>
          </Card>
          <Card>
            <CardImage alt="minwater" src={minwater} />
            <CardInfo>
              <CardCity>
                <FlagCard alt="flag" src={russia} />Минеральные воды
              </CardCity>
              <CardPrice>Найти от 2 074 ₽</CardPrice>
            </CardInfo>
            <CardInfo>
              <CardCountry>Россия</CardCountry>
              <CardDate>13 марта</CardDate>
            </CardInfo>
          </Card>
          <Card>
            <CardImage alt="simferopol" src={simferopol} />
            <CardInfo>
              <CardCity>
                <FlagCard alt="flag" src={russia} />Симферополь
              </CardCity>
              <CardPrice>Найти от 2 407 ₽</CardPrice>
            </CardInfo>
            <CardInfo>
              <CardCountry>Крым</CardCountry>
              <CardDate>13 марта</CardDate>
            </CardInfo>
          </Card>
          <Card>
            <CardImage alt="barsa" src={barsa} />
            <CardInfo>
              <CardCity>
                <FlagCard alt="flag" src={spain} />Барселона
              </CardCity>
              <CardPrice>Найти от 4 247 ₽</CardPrice>
            </CardInfo>
            <CardInfo>
              <CardCountry>Испания</CardCountry>
              <CardDate>24 марта</CardDate>
            </CardInfo>
          </Card>
        </DestCard>
        <LogoBest>
          <Month alt="logo" src={month} />
        </LogoBest>
        <Title>
          <Text>Лучшие цены на авиабилеты за последний месяц</Text>
        </Title>
        <Direction>
          <Flag alt="flag" src={russia} />
          <DirectionDesc>
            <DirCity>Симферополь (Крым)</DirCity>
            <DirCountry>Крым</DirCountry>
          </DirectionDesc>
        </Direction>
        <DirectionList>
          <DirectionLine>
            <DirFrom>Из Москвы</DirFrom>
            <DirCost>от 4 813 ₽</DirCost>
          </DirectionLine>
          <DirectionLine>
            <DirFrom>Из Санкт-Петербурга</DirFrom>
            <DirCost>от 7 857 ₽</DirCost>
          </DirectionLine>
          <DirectionLine>
            <DirFrom>Из Новосибирска</DirFrom>
            <DirCost>от 15 127 ₽</DirCost>
          </DirectionLine>
          <DirectionLine>
            <DirFrom>Из Екатеринбурга</DirFrom>
            <DirCost>от 9 275 ₽</DirCost>
          </DirectionLine>
          <DirectionLine>
            <DirFrom>Из Челябинска</DirFrom>
            <DirCost>от 9 148 ₽</DirCost>
          </DirectionLine>
        </DirectionList>
        <Direction>
          <Flag alt="flag" src={armenia} />
          <DirectionDesc>
            <DirCity>Ереван</DirCity>
            <DirCountry>Армения</DirCountry>
          </DirectionDesc>
        </Direction>
        <DirectionList>
          <DirectionLine>
            <DirFrom>Из Москвы</DirFrom>
            <DirCost>от 6 758 ₽</DirCost>
          </DirectionLine>
          <DirectionLine>
            <DirFrom>Из Санкт-Петербурга</DirFrom>
            <DirCost>от 9 932 ₽</DirCost>
          </DirectionLine>
          <DirectionLine>
            <DirFrom>Из Новосибирска</DirFrom>
            <DirCost>от 11 951 ₽</DirCost>
          </DirectionLine>
          <DirectionLine>
            <DirFrom>Из Екатеринбурга</DirFrom>
            <DirCost>от 11 741 ₽</DirCost>
          </DirectionLine>
          <DirectionLine>
            <DirFrom>Из Челябинска</DirFrom>
            <DirCost>от 11 956 ₽</DirCost>
          </DirectionLine>
        </DirectionList>
        <Direction>
          <Flag alt="flag" src={moldavia} />
          <DirectionDesc>
            <DirCity>Кишинёв</DirCity>
            <DirCountry>Молдавия</DirCountry>
          </DirectionDesc>
        </Direction>
        <DirectionList>
          <DirectionLine>
            <DirFrom>Из Москвы</DirFrom>
            <DirCost>от 8 319 ₽</DirCost>
          </DirectionLine>
          <DirectionLine>
            <DirFrom>Из Санкт-Петербурга</DirFrom>
            <DirCost>от 10 800 ₽</DirCost>
          </DirectionLine>
          <DirectionLine>
            <DirFrom>Из Новосибирска</DirFrom>
            <DirCost>от 12 098 ₽</DirCost>
          </DirectionLine>
          <DirectionLine>
            <DirFrom>Из Екатеринбурга</DirFrom>
            <DirCost>от 16 277 ₽</DirCost>
          </DirectionLine>
          <DirectionLine>
            <DirFrom>Из Челябинска</DirFrom>
            <DirCost>от 15 987 ₽</DirCost>
          </DirectionLine>
        </DirectionList>
        <AddText>
          Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
          мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
          авиакомпаний.
        </AddText>
        <OffertaText>
          Цены, найденные пользователями за последние 48 часов, не являются
          офертой.
        </OffertaText>
      </div>
    </Destinations>
  );
};
