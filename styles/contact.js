import styled from 'styled-components';
import { Colors, FontSizes } from "../components/constants/theme";

const { white, primaryColor, black } = Colors;
const { titleFontSize, secondaryFontSize } = FontSizes;

export const Paragraph = styled.p`
  margin-block: 10px;
  font-size: 22px;
  color: ${black};
  line-height: 33px;
  width: 50%;
  text-align: center;
`;

export const ContentCard = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
`;

export const AboutContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  height: fit-content;
  margin-block: 80px;
`;

export const CardIcon = styled.div`
  width: 80px;
  height: 80px;
`;

export const CardTitle = styled.h3`
  font-size: 32px;
  color: ${primaryColor};
  line-height: 36px;
  margin-block: 20px;
`;

export const CardContent = styled.p`
  margin-block: 10px;
  font-size: 18px;
  color: ${black};
  line-height: 34px;
  width: 80%;
  text-align: justify;
`;