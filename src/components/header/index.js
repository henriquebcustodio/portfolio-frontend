import { useState } from "react";
import { Logo, Navbar, Links, Link, Icon } from "./style"
import { Squash as Hamburger } from "hamburger-react";
import { theme } from "../../shared/theme";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar>
      <Logo>{"<Hbc/>"}</Logo>
      <Links isOpen={isMenuOpen}>
        <Link isActive={true}>Home</Link>
        <Link>About</Link>
        <Link>Projects</Link>
      </Links>
      <Icon>
        <Hamburger
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
          size={32}
          color={theme.text.default}
          direction="right"
        />
      </Icon>
    </Navbar>
  )
}
export default Header