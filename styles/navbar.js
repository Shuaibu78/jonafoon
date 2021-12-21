import styled from 'styled-components';
import { Colors, media } from "../components/constants/theme";

const { white, primaryColor } = Colors;
const { mobile } = media;

export const Container = styled.div`
  background-color: ${white};
  width: 100%;
  height: 96px;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 999;
  opacity: 0.95;
  box-shadow: 0px 2px 15px rgb(0 0 0 / 5%);
`;

export const HamburgerButton = styled.button`
  background: transparent; 
  border: none;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;

    ${mobile} {
    display: none;
  }
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

export const HamburgerNavContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;;
  height: 100vh;
  background-color: ${primaryColor};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CancelBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const HamburgerNavContent = styled.div`
  width: 80%;
  height: 80vh;
`;

export const QuickLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;
`;

export const SiteLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  height: 60vh;
  font-size: 48px;
  line-height: 110px;
  font-weight: 500;
`;

export const SocialLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-decoration: underline;
  width: 50%;
  height: 60vh;
  font-size: 28px;
  line-height: 70px;
  font-weight: 500;
`;