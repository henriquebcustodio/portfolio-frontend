import { useState } from "react";
import { Logo, Navbar, Links, Link, Icon, HeaderContactButton } from "./style"
import { Squash as Hamburger } from "hamburger-react";
import { theme } from "../../shared/theme";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <Navbar>
      <Logo to="/">{"<Hbc/>"}</Logo>
      <Links isOpen={isMenuOpen}>
        <Link onClick={closeMenu} to="/">Home</Link>
        <Link onClick={closeMenu} to="/about">About</Link>
        <Link onClick={closeMenu} to="/projects">Projects</Link>
        <HeaderContactButton onClick={closeMenu} role="button">Contact</HeaderContactButton>
      </Links>
      <Icon>
        <Hamburger
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
          size={24}
          color={theme.text.default}
          direction="right"
        />
      </Icon>
    </Navbar>
  )
}
export default Header