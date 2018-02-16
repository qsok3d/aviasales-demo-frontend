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
`;

const Title = styled.h2`
  padding-top: 25px;
  margin: 0;
  font-size: 1rem;
  line-height: 1.25;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: 600;
  text-align: center;
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
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
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

export default () => {
  return (
    <Subscribe>
      <Border alt="border" src={border} />
      <div className="container">
        <Title>Хотите знать всё о скидках на авиабилеты?</Title>
        <Text>
          Вы можете подписаться на нашу рассылку через соцсети или по
          электронной почте
        </Text>
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
      </div>
    </Subscribe>
  );
};
