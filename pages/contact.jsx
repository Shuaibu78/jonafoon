import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import HeroImg from "../img/about.png";
import { HeroContainer, HeroBtnContainer, TalkToUsBtn } from "../styles/index";

import {
  Paragraph,
  ContentCard,
  AboutContentContainer,
  CardIcon,
  CardTitle,
  CardContent,
  ContainerTitle,
} from "../styles/contact";

import {
  AboutWrapper,
  AboutTitlecontainer,
  SectionTitle,
  HeroTitle,
  ImageWrap,
} from "../styles/about";

const Contact = () => {

    const internalLinks = [
      { href: "/", value: "Home" },
      { href: "#contact", value: "Contact Us " },
      { href: "/about", value: "About Us" },
    ];
  
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Jonafoon Nigeria Limited optimizes business opportunities by rendering a service that is readily available delivered by professionally qualiﬁed people, provides latest technology products and transfers knowledge through training and development opportunities."
        />
        <meta
          name="keywords"
          content="Jonafoon, Jonafoon Nigeria Limited, ICT, construction"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar internalLinks={internalLinks} />

      <HeroContainer>
        <ImageWrap>
          <Image src={HeroImg} alt="construction" />
        </ImageWrap>
        <HeroTitle>
          <ContainerTitle>
            <h1 style={{ height: "auto", margin: 0 }}>Contact Us</h1>
          </ContainerTitle>
          <HeroBtnContainer>
            <TalkToUsBtn>Send Message</TalkToUsBtn>
          </HeroBtnContainer>
        </HeroTitle>
      </HeroContainer>

      <AboutWrapper id="contact">
        <AboutTitlecontainer>
          <SectionTitle>Get In Touch Today</SectionTitle>
          <Paragraph>
            Let`&#39;`s partner to solve real world problems that will help you
            reach your goal. We provide the awesome services you need.
          </Paragraph>
        </AboutTitlecontainer>
        <AboutContentContainer>
          <ContentCard>
            <CardIcon>
              <svg
                style={{ width: "80px", height: "80px", color: "#0083C4" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLineJoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </CardIcon>
            <CardTitle>Visit Us</CardTitle>
            <CardContent>
              <p>Abuja Office: 12B Excel Estate Apo, FCT-Abuja, Nigeria.</p>
              <p>
                Lagos Office: 16, Allbu Street, Surelere Off Vode Thomas, Lagos
                State
              </p>
            </CardContent>
          </ContentCard>
          <ContentCard>
            <CardIcon>
              <svg
                style={{ width: "80px", height: "80px", color: "#0083C4" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </CardIcon>
            <CardTitle>Call Us</CardTitle>
            <CardContent>
              <p>+234 (0) 803 628 7842</p>
              <p>+234 (0) 812 376 0225</p>
              <p>+234 (0) 818 054 6425</p>
            </CardContent>
          </ContentCard>
          <ContentCard>
            <CardIcon>
              <svg
                style={{ width: "80px", height: "80px", color: "#0083C4" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </CardIcon>
            <CardTitle>Email Us</CardTitle>
            <CardContent>
              <p>Ready to start a project with us?</p>
              <span>
                <a href="mailto:info@jonafoon.com">Info@jonafoon.com</a>
              </span>
            </CardContent>
          </ContentCard>
        </AboutContentContainer>
      </AboutWrapper>

      <Footer />
    </div>
  );
};

export default Contact;
