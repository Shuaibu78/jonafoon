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
          <Link href="/">
            <a>
              <Image src={Logo} alt="Jonafoon" width={100} height={70} />
            </a>
          </Link>
        </LogoWrapper>
        <NavLinkWrapper>
          <NavLinks>
            <Link href="#project">
              <a>Project</a>
            </Link>
            <Link href="#process">
              <a>How We Work</a>
            </Link>
            <Link href="#services">
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
                  <Link href="/">
                    <a onClick={handleNavChange}>Home</a>
                  </Link>
                  <Link href="/about">
                    <a onClick={handleNavChange}>About Us</a>
                  </Link>
                  <Link href="/contact">
                    <a onClick={handleNavChange}>Contact Us</a>
                  </Link>
                  <Link href="/service">
                    <a onClick={handleNavChange}>Our Services</a>
                  </Link>{" "}
                  <Link href="/">
                    <a style={{ textDecoration: "underline" }}>Talk To Us</a>
                  </Link>
                </SiteLink>
                <SocialLink>
                  <Link href="/">
                    <a>Facebook</a>
                  </Link>
                  <Link href="/">
                    <a>Instagram</a>
                  </Link>{" "}
                  <Link href="/">
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
