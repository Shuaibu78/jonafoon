import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import HeroImg from "../img/about.png";
import Rectangle from "../img/Rectangle.png";
import Kenneth from "../img/sound.jpg";
import COO from "../img/owupe.png";
import Adewunmi from "../img/adewunmi.png";
import nkechi from "../img/nkechi.png";
import owope from "../img/owope.png";
import bolanle from "../img/bolanle.jpg";
import Suleiman from "../img/Suleiman.png";
import chukwuka from "../img/chukwuka.png";
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
    { href: "#team", value: "Team" },
    {
      href: "https://drive.google.com/file/d/1Bzozxxmz4HXYy5mf46qIePj9irjeRJSG/view?usp=sharing",
      value: "View Brochure",
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
                  <Image src={owope} alt="owope" />
                </TeamMemberImage>
                <TeamMemberInfo>
                  <TeamMemberName>
                    Gabriel Adetun Bondefaiye, Owope
                  </TeamMemberName>
                  <TeamMemberRole>Director (Chairman)</TeamMemberRole>
                </TeamMemberInfo>
              </CardFront>
              <CardBack>
                <p>
                  An Experienced Senior-level professional and a Chartered
                  Stockbroker. He has served as CEO of several private companies
                  with over 3 decades of progressive experience and proven
                  record of significant, successful contribution in financial
                  management with core competencies in Capital Market
                  Operations, Asset and Fund Management, International Fund
                  Mediation (diaspora funds) as well as Groupings and Micro
                  Financing. He is a highly analytical decision-maker with
                  extensive experience in building and operating companies along
                  with proven history of increasing productivity and turning
                  around difficult situations. He has Masters in Business
                  Administration (MBA) from Ahmadu Bello University, Zaria,
                </p>
              </CardBack>
            </FlipCard>
          </TeamMember>
          <TeamMember>
            <FlipCard>
              <CardFront>
                <TeamMemberImage>
                  <Image src={chukwuka} alt="chukwuka" />
                </TeamMemberImage>
                <TeamMemberInfo>
                  <TeamMemberName>Dr. Chuwuka Onyekwena</TeamMemberName>
                  <TeamMemberRole>Director (V. Chairman)</TeamMemberRole>
                </TeamMemberInfo>
              </CardFront>
              <CardBack>
                <p>
                  He is an Executive Director of CSEA. He holds a Ph.D in
                  Economics from University of Portsmouth, UK. He holds a
                  certificate in Executive Education, Financial Inclusion from
                  John F. Kennedy School of Government, Harvard University. His
                  research interests include Foreign Direct Investment (FDI),
                  Trade, Global Economic Governance, Climate Change, and
                  Financial Inclusion. Within these areas, he has authored
                  various peer-reviewed publications and led several research
                  projects. Dr. Onyekwena is a member of the steering committee
                  of the West African Think Tank Network (WATTNet), a member of
                  the African Policy Circle (APC), Global.
                </p>
              </CardBack>
            </FlipCard>
          </TeamMember>
          <TeamMember>
            <FlipCard>
              <CardFront>
                <TeamMemberImage>
                  <Image src={Suleiman} alt="Suleiman" />
                </TeamMemberImage>
                <TeamMemberInfo>
                  <TeamMemberName>Abdurrahman Sulaiman Bawa</TeamMemberName>
                  <TeamMemberRole>Director</TeamMemberRole>
                </TeamMemberInfo>
              </CardFront>
              <CardBack>
                <p>
                  Has over 23 years cognate experience in Business
                  Administration and Management. He has attended several
                  seminars, workshops and training within and outside the shores
                  of Nigeria. He is a director of many successful companies some
                  among them are: Senior Consultant: Atmosfair Climate &
                  Sustainability Germany. Group Head of Administration: “To Be
                  Connected Nigeria Ltd, Abuja, Director: Millennium Aviation
                  Limited, Abuja, Director: Lexxgem Constructions Ltd Rivers
                  State, Director: Ahaz Int. Nig. Ltd Kano, Director: Diplomatic
                  Village Nigeria Ltd Abuja, Director: Private Flyers
                  International Ltd Kaduna, National Coordinator: Nigerian Book
                  Trust Kano. As a Business Manager and Administrator, he gives
                  strategic direction and leadership to the team.
                </p>
              </CardBack>
            </FlipCard>
          </TeamMember>
          <TeamMember>
            <FlipCard>
              <CardFront>
                <TeamMemberImage>
                  <Image src={Adewunmi} alt="Adewunmi" />
                </TeamMemberImage>
                <TeamMemberInfo>
                  <TeamMemberName>
                    Adewunmi A. Adefarasin (COREN)
                  </TeamMemberName>
                  <TeamMemberRole>Managing Director</TeamMemberRole>
                </TeamMemberInfo>
              </CardFront>
              <CardBack>
                <p>
                  A graduate of Bachelor of Technology in Engineering from the
                  Federal University of Technology Minna, Niger State, with over
                  thirteen years of experience in the field of Civil/Structural
                  Engineering, he has acquired enormous experience working with
                  engineering firms cutting across several projects within
                  Nigeria some of which include, Promasidor Nigeria Ltd Head
                  Office Isolo, Lagos, NSPRI Ilorin Library Ilorin, Kwara State,
                  NECO Headquarters Registrar Building Minna.(Office Building),
                  Nigerian Bar Association National Secretariat Abuja (Utility
                  Building) and several Projects with Dantata & Sawoe
                  Construction Company. Adewunmi is a member of several
                  professional bodies and a registered COREN- (Registered
                  Engineer R-24405) and Nigerian Society of Engineers (NSE) -
                  Corporate Member 28320.
                </p>
              </CardBack>
            </FlipCard>
          </TeamMember>
          <TeamMember>
            <FlipCard>
              <CardFront>
                <TeamMemberImage>
                  <Image src={COO} alt="Bolaji" />
                </TeamMemberImage>
                <TeamMemberInfo>
                  <TeamMemberName>Bolaji Owope </TeamMemberName>
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
                  <Image src={bolanle} alt="bolanle" />
                </TeamMemberImage>
                <TeamMemberInfo>
                  <TeamMemberName>Mrs. Bolanle Adeyemo</TeamMemberName>
                  <TeamMemberRole>Human Resource Manager</TeamMemberRole>
                </TeamMemberInfo>
              </CardFront>
              <CardBack>
                <p>
                  Holds a Bsc, degree in Sociology from the prestigious
                  university of Ilorin, and a master’s degree in Criminology
                  from the university of Lagos. Mrs. Adeyemo begun her
                  illustrious career in the Nigeria banking sector in 2002
                  working with several banks until 2012 when she voluntarily
                  resigned to pursue a career in a more diverse sector. She
                  joined Jonafoon Nigeria Limited and currently is the Human
                  Resource Manager. While in banking, Bolanle developed various
                  skills such as, leadership, technical ability, customer
                  service, project management, and research. As a successful
                  banker with a proven history of establishing valuable
                  relationships with clients, she constantly utilizes a variety
                  of resources and tools to track and improve business process
                  as well as recruitment policy for the company.
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
                  <Image src={nkechi} alt="nkechi" />
                </TeamMemberImage>
                <TeamMemberInfo>
                  <TeamMemberName>Nkechi Abidemi Amadi</TeamMemberName>
                  <TeamMemberRole>
                    Accountant and Financial Admin
                  </TeamMemberRole>
                </TeamMemberInfo>
              </CardFront>
              <CardBack>
                <p>
                  A BSc graduate from Olabisi Onabanjo University, Nigeria
                  (2007) and Masters in Business and Management from the
                  University of Portsmouth, United Kingdom (2011), Abidemi Amadi
                  is a resourceful and diligent professional with the drive,
                  determination and experience of working in a busy Finance
                  department, providing support and reports to assist in key
                  business decisions. She possesses excellent numerical,
                  communication and analytical skills with a proven ability to
                  ensure that work is carried out in line with set down policies
                  and procedures. Abidemi is a Certified Chartered Accountant
                  (ACAA) and has attended several workshops and training.
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