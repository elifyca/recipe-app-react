import React, { useState } from "react";
import { Nav, Logo, Hamburger, MenuLink, Menu } from "./NavbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [github, setGithub] = useState("");
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        
        <span />
        <span />
        <span />
        
      </Hamburger>

      <Menu osman={isOpen}>
        
        <MenuLink onClick={() => setIsOpen(!isOpen)} to="/about">
         
        </MenuLink>
        
        <MenuLink
          onClick={() =>
            setGithub(
              (window.location.href =
                "https://github.com/elifyca")
            )
          }
          to={github}
          target="_blank"
        >
          
        </MenuLink>
        
        <MenuLink
          onClick={() => setIsOpen(!isOpen)}
          onMouseUp={() => sessionStorage.clear()}
          to="/" >
          
        </MenuLink>

      </Menu>
    </Nav>
  );
};

export default Navbar;
