import React from "react";
import {
  Container,
  FooterWrapper,
  FooterContent,
  FooterImage,
  ImageWrap,
  TagWrapper,
  Subtitle,
  SocialIcons,
  Links,
  Contacts,
  Address,
  CopywriteWrapper,
} from "../../styles/footer";
import Image from "next/image";
import Link from "next/link";
import footerImg from "../../img/footerbg.png";
import Facebook from "../../img/Facebook.png";
import Instagram from "../../img/Instagram.png";
import LinkedIn from "../../img/LinkedIn.png";

const Footer = () => {

  let currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <ImageWrap>
          <FooterImage src={footerImg} alt="footer" />
        </ImageWrap>
        <FooterContent>
          <TagWrapper>
            <Subtitle>FOLLOW US</Subtitle>
            <SocialIcons>
              <Link href="/" passHref>
                <a>
                  <Image src={Facebook} alt="facebook" />
                </a>
              </Link>
              <Link href="/" passHref>
                <a>
                  <Image src={Instagram} alt="instagram" />
                </a>
              </Link>{" "}
              <Link href="/" passHref>
                <a>
                  <Image src={LinkedIn} alt="linkedin" />
                </a>
              </Link>
            </SocialIcons>
          </TagWrapper>{" "}
          <TagWrapper>
            <Subtitle>Quick Links</Subtitle>
            <Links>
              <Link href="/" passHref>
                <a>Home</a>
              </Link>
              <Link href="/about" passHref>
                <a>About Us</a>
              </Link>
              <Link href="/contact" passHref>
                <a>Contact Us</a>
              </Link>
              <Link href="/service" passHref>
                <a>Our Services</a>
              </Link>
            </Links>
          </TagWrapper>{" "}
          <TagWrapper>
            <Subtitle>Contacts</Subtitle>
            <Contacts>
              <p>+234 (0) 803 628 7842</p>
              <p>+234 (0) 812 376 0225</p>
              <p>+234 (0) 818 054 6425</p>
              <span>
                <a href="mailto:info@jonafoon.com">Info@jonafoon.com</a>
              </span>
            </Contacts>
          </TagWrapper>{" "}
          <TagWrapper>
            <Subtitle>Office</Subtitle>
            <Address>
              <p>Abuja Office: 12B Excel Estate Apo, FCT-Abuja, Nigeria.</p>
              <p>
                Lagos Office: 16, Allbu Street, Surelere Off Vode Thomas, Lagos
                State
              </p>
            </Address>
          </TagWrapper>
        </FooterContent>
      </Container>
      <CopywriteWrapper>
        <p>Copyright © {currentYear} Jonafoon. All rights reserved.</p>
      </CopywriteWrapper>
    </FooterWrapper>
  );
};

export default Footer;
