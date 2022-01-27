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
  HeroSubTitle,
  FlipCard,
  CardFront,
  CardBack,
} from "../styles/about";

const About = () => {
  const internalLinks = [
    { href: "#mission", value: "Mission" },
    { href: "#team", value: "Team Members" },
    {
      href: "https://drive.google.com/file/d/1CvgiOCyv8N7-nEHQb53sgLWIfOcNSOeJ/view?usp=sharing",
      value: "Brochure",
    },
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
            <FlipCard>
              <CardFront>
                <TeamMemberImage>
                  <Image src={CEO} alt="Bolaji" />
                </TeamMemberImage>
                <TeamMemberInfo>
                  <TeamMemberName>Bolaji Owope</TeamMemberName>
                  <TeamMemberRole>Chief Operating Officer</TeamMemberRole>
                </TeamMemberInfo>
              </CardFront>
              <CardBack>
                <p>
                  A graduate of E-commerce and Internet systems from the
                  University of Portsmouth, United Kingdom, Mr. Owope has over
                  fifteen years hands-on experience in the field of information
                  technology with special interest in Cyber security and project
                  management. He is a member of several professional bodies; a
                  certified ethical hacker (CEH), certified network security
                  specialist- ICSI| (CNSS), Information Technology
                  Infrastructure Library- (ITIL), United Nations Office for
                  Disarmament Affairs (Cyber Diplomacy Certified) Mr. Owope has
                  attended various trainings, workshops and seminars, amongst
                  them is the prestigious “Autopsy Training”: - USA (BASIS
                  TECHNOLOGY).
                </p>
              </CardBack>
            </FlipCard>
          </TeamMember>
          <TeamMember>
            <FlipCard>
              <CardFront>
                <TeamMemberImage>
                  <Image src={Kenneth} alt="sys admin" />
                </TeamMemberImage>
                <TeamMemberInfo>
                  <TeamMemberName>Kenneth Nwankwo</TeamMemberName>
                  <TeamMemberRole>Systems Administrator</TeamMemberRole>
                </TeamMemberInfo>
              </CardFront>
              <CardBack>
                <p>
                  kenneth Nwankwo, is a Masters student of the department of
                  Cyber Security Science, School of Information and
                  Communication Technology, Federal University of Technology
                  (FUT) Minna, Nigeria. He received his B.Tech. in Physics
                  Electronics from Federal University of Technology Owerri,
                  Nigeria. He has been the lead Researcher and Software Engineer
                  in Candit Communications. With high interest in AI, Robotics,
                  Information and Cyber Security He had made publications in
                  high impact journals including IEEE Conference Publication on
                  “Sinkhole Attack detection Using Enhanced Ant Colony
                  Optimization Technique to improve detection”. Being a tech
                  expert consultant with MG Management Consultancy, has been
                  part of many training and lectures.
                </p>
              </CardBack>
            </FlipCard>
          </TeamMember>
          <TeamMember>
            <FlipCard>
              <CardFront>
                <TeamMemberImage>
                  <Image src={Zakari} alt="Zakari" />
                </TeamMemberImage>
                <TeamMemberInfo>
                  <TeamMemberName>Zakari .O. Osuman</TeamMemberName>
                  <TeamMemberRole>Cybersecurity - Specialist</TeamMemberRole>
                </TeamMemberInfo>
              </CardFront>
              <CardBack>
                  <p>
                    Mr.Zakar Osuman is an ICT proffessional from the University
                    of Portsmouth in the United kingdom. He has very advanced
                    experience in computer networks and CISCO technology. He is
                    a CISCO certified network professional for the past 13years.
                    He is also a senior cyber security expert with CEH,CISM and
                    CISSP Certifications. A very high level experienced service
                    desk analyst with additional certifications in ITIL and PMP,
                    he is a renowned and reputable facilitator and ICT
                    instructor.
                  </p>
              </CardBack>
            </FlipCard>
          </TeamMember>
        </TeamMemberCardContainer>
      </TeamWrapper>

      <Footer />
    </div>
  );
}

export default About;