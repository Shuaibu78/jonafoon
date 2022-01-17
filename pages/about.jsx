import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import HeroImg from "../img/about.png";
import Rectangle from "../img/Rectangle.png";
import CEO from "../img/ceo.jpeg";
import Kenneth from "../img/sound.jpeg";
import Zakari from "../img/zakari.jpeg";
import {
  HeroContainer,
  HeroBtnContainer,
  TalkToUsBtn,
} from "../styles/index";

import {
  AboutWrapper,
  AboutTitlecontainer,
  SectionTitle,
  AboutContentContainer,
  ContentCard,
  CardTitle,
  CardContent,
  TeamWrapper,
  TeamTtleContainer,
  TeamMemberCardContainer,
  TeamMember,
  TeamMemberImage,
  TeamMemberInfo,
  TeamMemberName,
  TeamMemberRole,
  ImageWrap,
  HeroTitle,
  HeroSubTitle
} from "../styles/about";

const About = () => {
  const internalLinks = [
    { href: "#mission", value: "Mission" },
    { href: "#team", value: "Team Members" },
    { href: "/service", value: "What We Do" },
  ];
  return (
    <div>
      <Head>
        <title>About</title>
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
          <HeroSubTitle>
            <h1 style={{ height: "auto", margin: 0 }}>About The Company</h1>
          </HeroSubTitle>
          <HeroBtnContainer>
            <Link
              href="https://tawk.to/chat/61bfbc36c82c976b71c22f51/1fnafedev"
              passHref
            >
              <TalkToUsBtn>Talk To Us</TalkToUsBtn>
            </Link>
          </HeroBtnContainer>
        </HeroTitle>
      </HeroContainer>

      <AboutWrapper id="mission">
        <AboutTitlecontainer>
          <SectionTitle>About Jonafoon</SectionTitle>
          <Image src={Rectangle} alt="rectangle" />
        </AboutTitlecontainer>
        <AboutContentContainer>
          <ContentCard>
            <CardTitle>Mission</CardTitle>
            <CardContent>
              At Jonafoon our mission is to ensure delivery of quality
              professional services abiding to high ethical standards with
              state- of-the-art technology and use of appropriate expertise and
              partnerships.
            </CardContent>
          </ContentCard>
          <ContentCard>
            <CardTitle>Vision</CardTitle>
            <CardContent>
              To be the most technological driven and advanced construction,
              engineering, and project management organization in Africa by
              abiding to ethical standards and use of appropriate expertise.
            </CardContent>
          </ContentCard>
        </AboutContentContainer>
      </AboutWrapper>

      <TeamWrapper id="team">
        <TeamTtleContainer>
          <SectionTitle>Our Team</SectionTitle>
        </TeamTtleContainer>
        <TeamMemberCardContainer>
          <TeamMember>
            <TeamMemberImage>
              <Image src={CEO} alt="Bolaji" />
            </TeamMemberImage>
            <TeamMemberInfo>
              <TeamMemberName>Bolaji Owope</TeamMemberName>
              <TeamMemberRole>Chief Operating Officer</TeamMemberRole>
            </TeamMemberInfo>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage>
              <Image src={Kenneth} alt="sys admin" />
            </TeamMemberImage>
            <TeamMemberInfo>
              <TeamMemberName>Kenneth Nwankwo</TeamMemberName>
              <TeamMemberRole>Systems Administrator</TeamMemberRole>
            </TeamMemberInfo>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage>
              <Image src={Zakari} alt="Zakari" />
            </TeamMemberImage>
            <TeamMemberInfo>
              <TeamMemberName>Zakari .O. Osuman</TeamMemberName>
              <TeamMemberRole>Cybersecurity - Specialist</TeamMemberRole>
            </TeamMemberInfo>
          </TeamMember>
        </TeamMemberCardContainer>
      </TeamWrapper>

      <Footer />
    </div>
  );
}

export default About;