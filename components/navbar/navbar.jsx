import {
  Container,
  Wrapper,
  LogoWrapper,
  NavLinkWrapper,
  NavLinks,
  HamburgerButton,
  HamburgerNavContainer,
  CancelBtn,
  HamburgerNavContent,
  QuickLinks,
  SiteLink,
  SocialLink,
} from "../../styles/navbar";
import Image from 'next/image';
import Link from "next/link";
import Logo from "../../img/logo.png";
import {useState} from "react";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleNavChange = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Link href="/" passHref>
            <a>
              <Image src={Logo} alt="Jonafoon" width={100} height={70} />
            </a>
          </Link>
        </LogoWrapper>
        <NavLinkWrapper>
          <NavLinks>
            <Link href="#project" passHref>
              <a>Project</a>
            </Link>
            <Link href="#process" passHref>
              <a>How We Work</a>
            </Link>
            <Link href="#services" passHref>
              <a>Services</a>
            </Link>
          </NavLinks>
          <div>
            <HamburgerButton type="button" onClick={handleNavChange}>
              <svg
                style={{ width: "40px", height: "40px" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </HamburgerButton>
          </div>
        </NavLinkWrapper>
        {isOpen === true && (
          <HamburgerNavContainer>
            <HamburgerNavContent>
              <CancelBtn>
                <HamburgerButton type="button" onClick={handleNavChange}>
                  <svg
                    style={{ width: "40px", height: "40px", color: "white" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLineJoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </HamburgerButton>
              </CancelBtn>
              <QuickLinks>
                <SiteLink>
                  <Link href="/" passHref>
                    <a onClick={handleNavChange}>Home</a>
                  </Link>
                  <Link href="/about" passHref>
                    <a onClick={handleNavChange}>About Us</a>
                  </Link>
                  <Link href="/contact" passHref>
                    <a onClick={handleNavChange}>Contact Us</a>
                  </Link>
                  <Link href="/service" passHref>
                    <a onClick={handleNavChange}>Our Services</a>
                  </Link>{" "}
                  <Link
                    href="https://tawk.to/chat/61bfbc36c82c976b71c22f51/1fnafedev"
                    passHref
                  >
                    <a style={{ textDecoration: "underline" }}>Talk To Us</a>
                  </Link>
                </SiteLink>
                <SocialLink>
                  <Link href="/" passHref>
                    <a>Facebook</a>
                  </Link>
                  <Link href="/" passHref>
                    <a>Instagram</a>
                  </Link>{" "}
                  <Link href="/" passHref>
                    <a>LinkedIn</a>
                  </Link>
                </SocialLink>
              </QuickLinks>
            </HamburgerNavContent>
          </HamburgerNavContainer>
        )}
      </Wrapper>
    </Container>
  );
}

export default Navbar
