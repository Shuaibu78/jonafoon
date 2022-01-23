import styled from "styled-components";
import { Colors, FontSizes, media } from "../components/constants/theme";

const { white, primaryColor, black } = Colors;
const { titleFontSize, secondaryFontSize } = FontSizes;
const { mobile } = media;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuoteContainer = styled.div`
  margin-block: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  h3 {
    font-size: 32px;
    color: ${black};
    line-height: 36px;
  }

  ${mobile}{
    margin-block: 10px;

    h3 {
    font-size: 16px;
    line-height: 24px;
    }
  }
`;

export const ProjectBtn = styled.button`
  border: 1px solid ${primaryColor};
  background-color: ${white};
  color: ${primaryColor};
  font-weight: bold;
  font-size: 26px;
  border-radius: 10px;
  width: 220px;
  height: 72px;
  cursor: pointer;

  ${mobile}{
    width: 150px;
    height: 46px;
    font-size: 14px;
  }
`;

export const ConstructionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-block: 5rem;

  ${mobile}{
    justify-content: center;
  }
`;

export const IctWrapper = styled(ConstructionWrapper)`
  justify-content: flex-start;

    ${mobile}{
    justify-content: center;
  }
`;

export const Construction = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 80%;
  background-color: #f8f8f8;
  padding: 4rem;

  ${mobile}{
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
`;

export const IctService = styled(Construction)`
  align-items: flex-start;

    ${mobile}{
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ConstructionServices = styled(MainContent)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const MainService = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  width: 40%;

  li {
    font-size: 18px;
    line-height: 33px;
  }

${mobile}{
  padding: 0.3rem;
  width: 100%;

  li {
    font-size: 14px;
    line-height: 26px;
  }
}
`;

export const Subtitle = styled.h3`
  font-size: 34px;
  color: ${black};
  line-height: 30px;

  ${mobile}{
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  margin-block: 10px;
  font-size: 22px;
  color: ${black};
  line-height: 33px;
  width: 55%;
  text-align: left;

  ${mobile}{
    font-size: 16px;
    width: 100%;
  }
`;