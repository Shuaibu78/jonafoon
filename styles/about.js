import styled from 'styled-components';
import { Colors, media, FontSizes} from "../components/constants/theme";

const { white, primaryColor, black } = Colors;
const { titleFontSize } = FontSizes;
const { mobile } = media;

export const AboutWrapper = styled.section`
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-block: 5rem;

  ${mobile}{
    padding-block: 2.5rem;
  }
`;

export const ImageWrap = styled.span`
  box-sizing: content-box;
  width: 100%;

  span {
    width: inherit !important;
    height: 82vh !important;
  }

  ${mobile}{
    display: none;
  }
`;

export const HeroTitle = styled.div`
  position: absolute;
  top: 310px;
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

  ${mobile}{
    position: initial;
    top: 0;
    left: 0;
    color: ${black};
    padding-top: 8rem;
    margin-inline: 2rem;

    p {
      font-size: 18px;
      width: 80%;
    }

    h1 {
      font-size: 38px;
      width: 80%;
      height: fit-content;
    }
  }
`;

export const AboutTitlecontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${mobile}{
    width: 80%;
  }
`;

export const TeamTtleContainer = styled(AboutTitlecontainer)``;

export const SectionTitle = styled.h3`
  font-size: 38px;
  color: ${primaryColor};
  line-height: 36px;
  margin-block: 20px;

  ${mobile}{
    font-size: 20px;
    line-height: 32px;
  }
`;

export const AboutContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  height: fit-content;
  margin-block: 150px;

  ${mobile}{
    width: 80%;
    flex-direction: column;
    margin-block: 50px;
  }
`;

export const TeamMemberCardContainer = styled(AboutContentContainer)`
  width: 80%;
  margin-block: 70px;

  ${mobile}{
    margin-block: 30px;
  }
`;

export const ContentCard = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;

  ${mobile}{
    width: 100%;
  }
`;

export const TeamMember = styled(ContentCard)`
  width: 30%;
  height: 550px;
  align-items: flex-start;
  background-color: ${white};
  box-shadow: 0px 2px 15px rgb(0 0 0 / 5%);

  ${mobile}{
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const TeamMemberImage = styled.div`
  width: 100%;
  object-fit: contain;

  span {
    height: 420px !important;
    width: inherit !important;
  }
`;

export const TeamMemberInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 10px;
`;

export const CardTitle = styled(SectionTitle)`
  color: ${black};
  font-size: 32px;

  ${mobile}{
    font-size: 18px;
  }
`;

export const HeroSubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 280px;

  ${mobile}{
    h1 {
      font-size: 30px;
      width: 48%;
    }

    height: 120px;
    justify-content: flex-start;
  }
`;

export const CardContent = styled.p`
  margin-block: 10px;
  font-size: 22px;
  color: ${ black };
  line-height: 33px;
  width: 80%;
  text-align: center;

  ${mobile}{
    width: 100%;
    font-size: 14px;
    line-height: 28px;
  }
`;

export const TeamWrapper = styled.section`
  background-color: #F9F9F9;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 5rem;

  ${mobile}{
  padding-block: 3rem;
  }
`;

export const TeamMemberName = styled.p`
  line-height: 16px;
  font-size: 24px;
  color: ${black};
  font-weight: 500;
  text-align: left;

  ${mobile}{
  font-size: 20px;
  }
`;

export const TeamMemberRole = styled.p`
  line-height: 12px;
  font-size: 18px;
  color: ${black};
  text-align: left;

  ${mobile}{
    font-size: 16px;
  }
`;