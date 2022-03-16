import { useState } from "react";
import { Logo, Navbar, Links, Link, Icon, HeaderContactButton } from "./style"
import { Squash as Hamburger } from "hamburger-react";
import { theme } from "../../shared/theme";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar>
      <Logo to="/">{"<Hbc/>"}</Logo>
      <Links isOpen={isMenuOpen}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <HeaderContactButton role="button">Contact</HeaderContactButton>
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