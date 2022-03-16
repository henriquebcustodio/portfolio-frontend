import { useState } from "react";
import { Logo, Navbar, Links, Link, Icon } from "./style"
import { MdMenu, MdClose } from "react-icons/md"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar>
      <Logo>Henrique</Logo>
      <Links isOpen={isMenuOpen}>
        <Link isActive={true}>Home</Link>
        <Link>About</Link>
        <Link>Projects</Link>
      </Links>
      <Icon onClick={() => setIsMenuOpen(isOpen => !isOpen)}>
        {!isMenuOpen && <MdMenu size={"2rem"} />}
        {isMenuOpen && <MdClose size={"2rem"} />}
      </Icon>
    </Navbar>
  )
}
export default Header