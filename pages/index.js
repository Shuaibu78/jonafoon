import React from "react";
import Head from 'next/head';
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import HeroImg from "../img/hero.png";
import Project1 from "../img/project1.png";
import Project2 from "../img/project2.png";
import Project3 from "../img/project3.png";
import { HeroContainer, HeroTitle, HeroBtnContainer, ServiceBtn, ProjectBtn, RecentWorkContainer, RecentWorkWrapper, RecentWorkCards, ProjectCard, ProjectImgContainer, ProjectDetails, CardBtn, HowWeWorkwrapper, WorkContainer, Subtitle, Paragraph, TalkToUsBtn, WhatWeDo, Service, ServiceCardContainer, ServiceCard, CardTitle, CardParagraph, TitleDescription, ImageWrap} from "../styles/index";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Jonfoon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <HeroContainer>
        <ImageWrap>
          <Image src={HeroImg} alt="construction" />
        </ImageWrap>
        <HeroTitle>
          <h1>We Provide Effective World Class Solutions!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <HeroBtnContainer>
            <ServiceBtn>Our Services</ServiceBtn>
            <ProjectBtn>Recent Projects</ProjectBtn>
          </HeroBtnContainer>
        </HeroTitle>
      </HeroContainer>

      <RecentWorkContainer id="project">
        <RecentWorkWrapper>
          <Subtitle>Our Recent Works</Subtitle>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>
        </RecentWorkWrapper>
        <RecentWorkCards>
          <ProjectCard>
            <ProjectImgContainer>
              <Image src={Project1} alt="work" />
            </ProjectImgContainer>
            <ProjectDetails>
              <h6>Project Name</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              <CardBtn>Explore More</CardBtn>
            </ProjectDetails>
          </ProjectCard>
          <ProjectCard>
            <ProjectImgContainer>
              <Image src={Project2} alt="work" />
            </ProjectImgContainer>
            <ProjectDetails>
              <h6>Project Name</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              <CardBtn>Explore More</CardBtn>
            </ProjectDetails>
          </ProjectCard>
          <ProjectCard>
            <ProjectImgContainer>
              <Image src={Project3} alt="work" />
            </ProjectImgContainer>
            <ProjectDetails>
              <h6>Project Name</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              <CardBtn>Explore More</CardBtn>
            </ProjectDetails>
          </ProjectCard>
        </RecentWorkCards>
      </RecentWorkContainer>

      <HowWeWorkwrapper id="process">
        <WorkContainer>
          <Subtitle>How We Work</Subtitle>
          <Paragraph>We listen to you and provide effective solutions that bridges the gap between your goals and the need of your customers</Paragraph>
          <TalkToUsBtn>Talk To Us</TalkToUsBtn>
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
