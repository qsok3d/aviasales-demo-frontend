import React from "react";
import styled from "styled-components";
import border from "./border.png";
import facebook from "./facebook.png";
import social from "./social.png";
import twitter from "./twitter.png";
import vk from "./vk.png";

const Subscribe = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    padding-top: 32px;
    display: block;
  }
`;

const Border = styled.img`
  width: 768px;
  height: 7px;
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  padding-top: 25px;
  margin: 0;
  font-size: 1rem;
  line-height: 1.25;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 600;
  text-align: center;
  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

const Text = styled.p`
  padding-top: 4px;
  margin: 0;
  font-size: 1rem;
  line-height: 1.375;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 500;
  text-align: center;
  padding: 0 204px;
  @media screen and (min-width: 1024px) {
    padding: 0;
    text-align: left;
    padding-right: 100px;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  @media screen and (min-width: 1024px) {
    padding-right: 10px;
  }
`;

const SocialIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 6px;
`;

const Subcription = styled.div`
  padding-top: 24px;
  display: flex;
  justify-content: center;
`;

const SubcriptionMail = styled.input``;

const SubcriptionButton = styled.button`
  padding: 8px 20px;
  border: none;
  background-color: #ff8e41;
  color: #fff;
`;

const SubscribeSocial = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export default () => {
  return (
    <Subscribe>
      <Border alt="border" src={border} />
      <div className="container">
        <div className="row">
          <div className="col-xl-offset-1 col-xl-5">
            <Title>Хотите знать всё о скидках на авиабилеты?</Title>
            <Text>
              Вы можете подписаться на нашу рассылку через соцсети или по
              электронной почте
            </Text>
          </div>
          <div className="col-xl-5">
            <SubscribeSocial>
              <Social>
                <SocialIcon alt="vk" src={vk} />
                <SocialIcon alt="facebook" src={facebook} />
                <SocialIcon alt="twitter" src={twitter} />
                <SocialIcon alt="social" src={social} />
              </Social>
              <Subcription>
                <SubcriptionMail placeholder="Ваш email" />
                <SubcriptionButton>Подписаться</SubcriptionButton>
              </Subcription>
            </SubscribeSocial>
          </div>
        </div>
      </div>
    </Subscribe>
  );
};
