import styled from 'styled-components';
import { Colors, FontSizes } from "../components/constants/theme";

const { white, primaryColor, black } = Colors;
const { titleFontSize, secondaryFontSize } = FontSizes;

export const HeroContainer = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;

export const ImageWrap = styled.span`
  box-sizing: content-box;
  width: 100%;

  span {
    width: inherit !important;
    background-color: black;
  }
`;

export const HeroTitle = styled.div`
  position: absolute;
  top: 110px;
  left: 134px;
  z-index: 2;
  color: ${white};

    h1{
      font-size: 50px;
      width: 510px;
      height: 230px;
    }

    p {
      font-size: ${titleFontSize};
      width: 640px;
      height: 80px;
  }
`;

export const HeroBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 430px;
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
`;

export const TalkToUsBtn = styled(ServiceBtn)`
  width: 280px;
  height: 64px;
  font-size: 24px;
  padding-inline: 12px;
  margin-top: 20px;
  border-radius: 8px;
`;

export const ProjectBtn = styled.button`
  color: ${black};
  font-size: 16px;
  background-color: ${white};
  border-radius: 10px;
  width: 170px;
  height: 64px;
  border: 1px solid transparent;
  cursor: pointer;
`;

export const CardBtn = styled(ProjectBtn)`
  width: 150px;
  height: 54px;
  border: 1px solid ${primaryColor};
  color: ${primaryColor};
`;

export const RecentWorkContainer = styled.div`
  background-color: #F9F9F9;
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
`;

export const Paragraph = styled.p`
  margin-block: 10px;
  font-size: 22px;
  color: ${black};
  line-height: 33px;
  width: 50%;
  text-align: center;
`;

export const TitleDescription = styled.p`
  margin-block: 10px;
  font-size: 26px;
  color: ${black};
  line-height: 40px;
  width: 50%;
`;

export const CardParagraph = styled(Paragraph)`
  color: ${white};
  font-size: 20px;
  width: 80%;
  text-align: left;
`;

export const Subtitle = styled.h3`
  font-size: 38px;
  color: ${primaryColor};
  line-height: 30px;
  margin-block: 20px;
`;

export const CardTitle = styled(Subtitle)`
  color: ${white};
  font-size: 32px;
`;

export const RecentWorkCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  width: 70%;
`;
export const ProjectCard = styled.div`
  height: fit-content;
  background-color: ${white};
  padding-bottom: 25px;
  width: min-content;
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

`;

export const HowWeWorkwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-block: 5rem;
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
`;

export const Service = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 500px;
  flex-direction: column;
  width: 80%;
`;

export const ServiceCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ServiceCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 19rem;
  flex-direction: column;
  width: 36%;
  background-color: ${primaryColor};
`;