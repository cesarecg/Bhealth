import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar.style";


function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer className="ml-auto" extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Inicio</NavbarLink>
            <NavbarLink to="/products"> Directorio</NavbarLink>
            <NavbarLink to="/contact"> Archivo Médico</NavbarLink>
            <NavbarLink to="/about"> Contacto</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Inicio</NavbarLinkExtended>
          <NavbarLinkExtended to="/products"> Directorio</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Archivo Médico</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> Contacto</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
