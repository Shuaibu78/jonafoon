import styled from 'styled-components';
import { Colors, FontSizes, media } from "../components/constants/theme";

const { white, primaryColor, black } = Colors;
const { titleFontSize, secondaryFontSize } = FontSizes;
const { mobile } = media;

export const HeroContainer = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;

  ${mobile}{
    background-color: #f8f8f8;
    padding-bottom: 18px;
  }
`;

export const ImageWrap = styled.span`
  box-sizing: content-box;
  width: 100%;

  span {
    width: inherit !important;
    background-color: black;
    margin-top: 100px !important;
  }

      ${mobile}{
    display: none;
  }
`;

export const HeroTitle = styled.div`
  position: absolute;
  top: 320px;
  left: 134px;
  z-index: 2;
  color: ${white};

    h1{
      font-size: 50px;
      width: 580px;
      height: 130px;
    }

    p {
      font-size: ${titleFontSize};
      width: 640px;
      height: fit-content;
      font-weight: medium;
  }

  ${mobile}{
    position: initial;
    top: 0;
    left: 0;
    color: ${black};
    padding-top: 8rem;
    margin-inline: 2rem;

    p {
      font-size: 16px;
      width: 80%;
    }

    h1 {
      font-size: 30px;
      width: 80%;
      height: fit-content;
    }
  }
`;

export const HeroBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 430px;
  margin-top: 30px;

  ${mobile}{
    width: 80%;
    margin-top: 10px;
  }
`;

export const ServiceBtn = styled.button`
  color: ${white};
  font-weight: bold;
  font-size: 16px;
  background-color: ${primaryColor};
  border-radius: 10px;
  width: 170px;
  height: 64px;
  border: 1px solid ${primaryColor};
  cursor: pointer;

  ${mobile}{
    width: 45%;
    height: 54px;
    font-size: 14px;
  }
`;

export const TalkToUsBtn = styled(ServiceBtn)`
  width: 280px;
  height: 64px;
  font-size: 24px;
  padding-inline: 12px;
  margin-top: 20px;
  border-radius: 8px;

  ${mobile}{
    width: 140px;
    font-size: 14px;
    height: 54px;
  }
`;

export const ProjectBtn = styled.button`
  color: ${black};
  font-size: 16px;
  background-color: ${white};
  border-radius: 10px;
  width: 170px;
  height: 64px;
  border: 1px solid transparent;
  box-shadow: 0px 2px 15px rgb(0 0 0 / 5%);
  cursor: pointer;

    ${mobile}{
    width: 45%;
    height: 54px;
    font-size: 14px;
  }
`;

export const CardBtn = styled(ProjectBtn)`
  width: 150px;
  height: 54px;
  border: 1px solid ${primaryColor};
  background-color: ${primaryColor};
  color: ${white};
`;

export const RecentWorkContainer = styled.div`
  background-color: #f8f8f8;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 5rem;
`;

export const RecentWorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

    ${mobile}{
    width: 80%;
    height: fit-content;
  }
`;

export const Paragraph = styled.p`
  margin-block: 10px;
  font-size: 22px;
  color: ${black};
  line-height: 33px;
  width: 50%;
  text-align: center;

  ${mobile}{
    width: 80%;
    font-size: 16px;
    line-height: 28px;
  }
`;

export const TitleDescription = styled.p`
  margin-block: 10px;
  font-size: 26px;
  color: ${black};
  line-height: 40px;
  width: 50%;

  ${mobile}{
    width: 80%;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 2rem;
  }
`;

export const CardParagraph = styled(Paragraph)`
  color: ${white};
  font-size: 20px;
  width: 80%;
  text-align: left;
  
  ${mobile}{
    font-size: 14px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 38px;
  color: ${primaryColor};
  line-height: 30px;
  margin-block: 20px;

    ${mobile}{
    font-size: 20px;
    line-height: 22px;
  }
`;

export const CardTitle = styled(Subtitle)`
  color: ${white};
  font-size: 32px;
  
  ${mobile}{
    font-size: 18px;
    width: 80%;
    text-align: left;
  }
`;

export const RecentWorkCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  width: 70%;


  ${mobile}{
    flex-direction: column;
    width: 80%;
    height: fit-content;
  }
`;

export const ProjectCard = styled.div`
  height: fit-content;
  background-color: ${white};
  padding-bottom: 25px;
  width: min-content;

    ${mobile}{
    margin-bottom: 2rem;
  }
`;

export const ProjectImgContainer = styled.div`
  width: 367px;
  height: 236px;
`;

export const ProjectDetails = styled.div`
  padding-inline: 30px;

  h6{
    font-size: ${titleFontSize};
    color: ${black};
    margin-block: 20px;
  }

  p {
    font-size: ${secondaryFontSize};
    color: ${black};
    line-height: 30px;
  }

  ${mobile}{
    h6{
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }

`;

export const HowWeWorkwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-block: 5rem;

  ${mobile}{
    padding-block: 3rem;
  }
`;

export const WorkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  flex-direction: column;
`;

export const WhatWeDo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-block: 5rem;

  ${mobile}{
    height: fit-content;
    padding-block: 3rem;
  }
`;

export const Service = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 500px;
  flex-direction: column;
  width: 80%;

  ${mobile}{
    width: 80%;
    height: fit-content;
  }
`;

export const ServiceCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile}{
    flex-direction: column;
    height: 680px;
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 19rem;
  flex-direction: column;
  width: 36%;
  background-color: ${primaryColor};

  ${mobile}{
    width: 100%;
    height: 20rem;
  }
`;