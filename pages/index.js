import React from "react";
import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import tawkTo from "tawkto-react";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import HeroImg from "../img/hero.png";
import Project1 from "../img/project1.png";
import Project2 from "../img/project2.png";
import Project3 from "../img/project3.png";
import { HeroContainer, HeroTitle, HeroBtnContainer, ServiceBtn, ProjectBtn, RecentWorkContainer, RecentWorkWrapper, RecentWorkCards, ProjectCard, ProjectImgContainer, ProjectDetails, CardBtn, HowWeWorkwrapper, WorkContainer, Subtitle, Paragraph, TalkToUsBtn, WhatWeDo, Service, ServiceCardContainer, ServiceCard, CardTitle, CardParagraph, TitleDescription, ImageWrap} from "../styles/index";

export default function Home() {

  // Direct Chat Link
  // https://tawk.to/chat/tawkToPropertyId/tawkToKey

  React.useEffect(() => {
    tawkTo("61bfbc36c82c976b71c22f51", "832a5b38dc0348776559dc2045ecf7d12de62fa8")
  }, []);


  const internalLinks = [
    { href: "#project", value: "Project" },
    { href: "#process", value: "Process" },
    { href: "#services", value: "Services" },
  ];

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Jonafoon Nigeria Limited optimizes business opportunities by rendering a service that is readily available delivered by professionally qualiﬁed people, provides latest technology products and transfers knowledge through training and development opportunities." />
        <meta name="keywords" content="Jonafoon, Jonafoon Nigeria Limited, ICT, construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar internalLinks={internalLinks} />

      <HeroContainer>
        <ImageWrap>
          <Image src={HeroImg} alt="construction" />
        </ImageWrap>
        <HeroTitle>
          <h1>We Provide Effective World Class Solutions!</h1>
          <p>We are a multi-engineering company that has developed an enviable reputation for customer service and satisfaction.</p>
          <HeroBtnContainer>
            <Link href="#services" passHref>
              <ServiceBtn>Our Services</ServiceBtn>
            </Link>
            <Link href="#project" passHref>
              <ProjectBtn>Recent Projects</ProjectBtn>
            </Link>
          </HeroBtnContainer>
        </HeroTitle>
      </HeroContainer>

      <RecentWorkContainer id="project">
        <RecentWorkWrapper>
          <Subtitle>Our Recent Works</Subtitle>
          <Paragraph>At the heart of every project we work on is the urge to solve real problems for our customers. These are some of our recent projects.</Paragraph>
        </RecentWorkWrapper>
        <RecentWorkCards>
          <ProjectCard>
            <ProjectImgContainer>
              <Image src={Project1} alt="work" />
            </ProjectImgContainer>
            <ProjectDetails>
              <h6>CBN - Training</h6>
              <p>Deployed the training for data protection and regulation based on the data protection act developed by NITDA</p>
              {/* <CardBtn>Explore More</CardBtn> */}
            </ProjectDetails>
          </ProjectCard>
          <ProjectCard>
            <ProjectImgContainer>
              <Image src={Project2} alt="work" />
            </ProjectImgContainer>
            <ProjectDetails>
              <h6>NCC - Toolkit Generation</h6>
              <p>Generated toolkit for the identification and transition of emerging technologies during covid pandemic outbreak</p>
              {/* <CardBtn>Explore More</CardBtn> */}
            </ProjectDetails>
          </ProjectCard>
          <ProjectCard>
            <ProjectImgContainer>
              <Image src={Project3} alt="work" />
            </ProjectImgContainer>
            <ProjectDetails>
              <h6>FIRS - Training</h6>
              <p>Deployed Cyber security training in order to teach about how protect systems, networks, programs, devices and data from cyber attacks</p>
              {/* <CardBtn>Explore More</CardBtn> */}
            </ProjectDetails>
          </ProjectCard>
        </RecentWorkCards>
      </RecentWorkContainer>

      <HowWeWorkwrapper id="process">
        <WorkContainer>
          <Subtitle>How We Work</Subtitle>
          <Paragraph>We listen to you and provide effective solutions that bridges the gap between your goals and the need of your customers</Paragraph>
          <Link href="https://tawk.to/chat/61bfbc36c82c976b71c22f51/1fnafedev" passHref>
            <TalkToUsBtn>Talk To Us</TalkToUsBtn>
          </Link>
        </WorkContainer>
      </HowWeWorkwrapper>

      <WhatWeDo id="services">
        <Service>
          <Subtitle>What We Do</Subtitle>
          <TitleDescription>We follow a solution methodology that allows us to build partnerships for life with our customers.</TitleDescription>
          <ServiceCardContainer>
            <ServiceCard>
              <CardTitle>
                Construction and Repairs
              </CardTitle>
              <CardParagraph>
                We deliver services through providing informed advice and consultancy services in our areas of concentration through our network of professionals and partners.
              </CardParagraph>
            </ServiceCard>
            <ServiceCard>
              <CardTitle>
                Information Technology
              </CardTitle>
              <CardParagraph>
                We deliver information communication and technology services that increases our customers efficiences, enhance productivity and optimise costs for their businesses.
              </CardParagraph>
            </ServiceCard>
          </ServiceCardContainer>
        </Service>
      </WhatWeDo>

      <Footer />
    </div>
  )
}
