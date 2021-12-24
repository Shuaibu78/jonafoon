import styled from 'styled-components';
import { Colors, FontSizes, media } from "../components/constants/theme";

const { white, primaryColor, black } = Colors;
const { titleFontSize, secondaryFontSize } = FontSizes;

export const Paragraph = styled.p`
  margin-block: 10px;
  font-size: 22px;
  color: ${black};
  line-height: 33px;
  width: 50%;
  text-align: center;

  ${media.mobile}{
    font-size: 16px;
    width: 100%;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 280px;

  ${media.mobile}{
    h1 {
      font-size: 30px;
      width: 48%;
    }

    height: 120px;
    justify-content: flex-start;
  }
`;
export const ContentCard = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;

    ${media.mobile}{
    width: 100%;
    margin-bottom: 3rem;
  }
`;

export const AboutContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  height: fit-content;
  margin-block: 80px;

  ${media.mobile}{
    flex-direction: column;
    margin-block: 40px;
  }
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

  ${media.mobile}{
    font-size: 20px;
    line-height: 24px;
    margin-block: 10px;
  }
`;

export const CardContent = styled.p`
  margin-block: 10px;
  font-size: 18px;
  color: ${black};
  line-height: 34px;
  width: 80%;
  text-align: justify;

    ${media.mobile}{
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    margin-block: 5px;
    text-align: center;
  }
`;