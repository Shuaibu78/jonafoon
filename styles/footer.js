import styled from 'styled-components';
import { Colors } from "../components/constants/theme";
import Image from "next/image";

const { white, primaryColor } = Colors;

export const Container = styled.footer`
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

export const FooterImage = styled(Image)`
  width: 100%;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: fit-content;
`;

export const FooterContent = styled.div`
  position: absolute;
  top: 60px;
  left: 80px;
  right: 80px;
  z-index: 2;
  color: ${white};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TagWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Subtitle = styled.h3`
  font-size: 34px;
  color: ${primaryColor};
  line-height: 30px;
  margin-block: 20px;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 294px;
  font-size: 24px;
  line-height: 33px;
`;

export const Contacts = styled(Links)`

  span > a {
    text-decoration: underline;
  }
`;
export const Address = styled(Links)``;

export const CopywriteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100px;

  p {
     font-size: 24px;
  }
`;