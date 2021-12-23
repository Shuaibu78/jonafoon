import styled from 'styled-components';
import { Colors, media } from "../components/constants/theme";
import Image from "next/image";

const { white, primaryColor, black } = Colors;

export const Container = styled.footer`
  width: 100%;
  height: fit-content;
  position: relative;

  ${media.mobile}{
    height: fit-content;
  }
`;

export const ImageWrap = styled.span`
  box-sizing: content-box;
  width: 100%;

  span {
    width: inherit !important;
  }

  ${media.mobile}{ 
    span {
      height: 895px !important;
    }
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
  left: 40px;
  right: 80px;
  z-index: 2;
  color: ${white};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  ${media.mobile}{
    flex-direction: column;
    height: fit-content;
  }
`;

export const TagWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  ${media.mobile}{
    width: 90%;
    margin-bottom: 20px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 34px;
  color: ${primaryColor};
  line-height: 30px;
  margin-block: 20px;

  ${media.mobile}{
    font-size: 20px;
    line-height: 14px;
    margin-block: 0px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;

${media.mobile}{
  margin-top: 0.8rem;
  margin-bottom: 1rem;

  span > img {
    width: 30px !important;
    height: 30px !important;
  }
}
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 294px;
  font-size: 24px;
  line-height: 33px;

  ${media.mobile}{
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 18px;
    height: 170px;
  }
`;

export const Contacts = styled(Links)`

  span > a {
    text-decoration: underline;
  }

  ${media.mobile}{
    p {
      margin: 0px;
    }
  }
`;
export const Address = styled(Links)`
  ${media.mobile}{
    p {
      margin: 0px;
    }
  }
`;

export const CopywriteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100px;

  p {
     font-size: 24px;
  }

  ${media.mobile}{
    width: 80%;
    p {
    font-size: 18px;
    }
  }
`;