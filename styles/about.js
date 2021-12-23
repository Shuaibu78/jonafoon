import styled from 'styled-components';
import { Colors, media } from "../components/constants/theme";

const { white, primaryColor, black } = Colors;
const { mobile } = media;

export const AboutWrapper = styled.section`
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-block: 5rem;
`;

export const AboutTitlecontainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const TeamTtleContainer = styled(AboutTitlecontainer)``;

export const SectionTitle = styled.h3`
  font-size: 38px;
  color: ${primaryColor};
  line-height: 36px;
  margin-block: 20px;
`;

export const AboutContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  height: fit-content;
  margin-block: 150px;
`;

export const TeamMemberCardContainer = styled(AboutContentContainer)`
  width: 80%;
    margin-block: 70px;
`;

export const ContentCard = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: inherit;
`;

export const TeamMember = styled(ContentCard)`
  width: 30%;
  height: 550px;
  background-color: ${white};
  box-shadow: 0px 2px 15px rgb(0 0 0 / 5%);
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
`;

export const CardContent = styled.p`
  margin-block: 10px;
  font-size: 22px;
  color: ${ black };
  line-height: 33px;
  width: 80%;
  text-align: left;
`;

export const TeamWrapper = styled.section`
  background-color: #F9F9F9;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 5rem;
`;

export const TeamMemberName = styled.p`
  line-height: 16px;
  font-size: 24px;
  color: ${primaryColor};
  font-weight: 500;
  text-align: left;
`;

export const TeamMemberRole = styled.p`
  line-height: 12px;
  font-size: 18px;
  color: ${black};
  text-align: left;
`;