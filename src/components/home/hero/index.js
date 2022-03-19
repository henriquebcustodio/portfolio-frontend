import { HeroActions, HeroContainer, HeroContactButton } from "./style";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = ({ heading, paragraphs }) => {
  return (
    <HeroContainer>
      <h1>{heading}</h1>
      {paragraphs.map(paragraph => {
        return <p key={paragraph.id}>{paragraph.text}</p>;
      })}
      <HeroActions>
        <a href="https://www.linkedin.com/in/henriquebonfa/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/henriquebcustodio">
          <FaGithub />
        </a>
        <HeroContactButton>Contact</HeroContactButton>
      </HeroActions>
    </HeroContainer>
  );
};
export default Hero;