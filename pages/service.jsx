import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import HeroImg from "../img/about.png";
import {
  HeroContainer,
  HeroBtnContainer,
  TalkToUsBtn,
} from "../styles/index";

import { HeroTitle, ImageWrap, HeroSubTitle } from "../styles/about";

import {
  QuoteContainer,
  Wrapper,
  ProjectBtn,
  Construction,
  ConstructionWrapper,
  ConstructionServices,
  MainContent,
  Subtitle,
  Paragraph,
  MainService,
  IctWrapper,
  IctService,
} from "../styles/service";

const Service = () => {

    const internalLinks = [
      { href: "#construction", value: "Construction" },
      { href: "#ict", value: "ICT" },
      { href: "/contact", value: "Contact" },
    ];
  
  return (
    <div>
      <Head>
        <title>Service</title>
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
            <h1 style={{ height: "auto", margin: 0 }}>Our Services</h1>
          </HeroSubTitle>
          <HeroBtnContainer>
            <TalkToUsBtn>Talk To Us</TalkToUsBtn>
          </HeroBtnContainer>
        </HeroTitle>
      </HeroContainer>

      <Wrapper>
        <QuoteContainer>
          <h3>Get a quote for your project</h3>
          <ProjectBtn>Get a Qoute</ProjectBtn>
        </QuoteContainer>
      </Wrapper>

      <ConstructionWrapper id="construction">
        <Construction>
          <MainContent>
            <Subtitle>Building Construction and Repair</Subtitle>
            <Paragraph>
              As a leading multi-professional practice, there are expert teams
              delivering services through several offices which is committed to
              upholding the values through providing informed advice and
              consultancy services in our areas of concentration through our
              network of professionals and partners. below are our areas of
              interest:
            </Paragraph>
          </MainContent>
          <ConstructionServices>
            <MainService>
              <ul>
                <li>Public and private buildings</li>
                <li>Commercial buildings</li>
                <li>Mass Housing and Residential estates</li>
                <li>Landscaping and Leisure developments </li>
                <li>Retail parks</li>
                <li>Industrial complexes</li>
              </ul>
            </MainService>
            <MainService>
              <ul>
                <li>Airports structures</li>
                <li>Highway structures and road construction</li>
                <li>Construction of Dam, Irrigation and</li>
                <li>Water retaining structures</li>
                <li>Renovation and Refurbishment</li>
              </ul>
            </MainService>
          </ConstructionServices>
        </Construction>
      </ConstructionWrapper>

      <IctWrapper id="ict">
        <IctService>
          <MainContent>
            <Subtitle>Information and Communication Technology</Subtitle>
            <Paragraph>
              We ensure that solutions are tailored for the speciﬁc needs that
              our customers require. Our range of diversiﬁed Information and
              communications technology and services form the foundation of the
              service levels and solutions which we oﬀer to our customers which
              increase their efﬁciencies, enhance productivity and optimise
              costs. These include:
            </Paragraph>
          </MainContent>
          <ConstructionServices>
            <MainService>
              <ul>
                <li>Network Solutions</li>
                <li>Unified Communications</li>
                <li>Audio Visual and Control Integration Systems</li>
                <li>
                  Information and Communications Technology Infrastructure
                  (ICTI)
                </li>
                <li>Security Systems</li>
              </ul>
            </MainService>
            <MainService>
              <ul>
                <li>End User Products</li>
                <li>Professional Services</li>
                <li>Rental and Leasing</li>
                <li>Web Solutions</li>
              </ul>
            </MainService>
          </ConstructionServices>
        </IctService>
      </IctWrapper>

      <Footer />
    </div>
  );
};

export default Service;
