import { HeroActions, HeroMain, HomeContactButton } from "./style";
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Home = () => {
  return (
    <section>
      <HeroMain>
        <h1>Hello, I'm Henrique Bonfá.</h1>
        <p>A front-end developer passionate about software and technology.</p>
        <p>I work with tools such as React and Angular to transform great designs into interactive web pages and applications.</p>
        <HeroActions>
          <a href="https://www.linkedin.com/in/henriquebonfa/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/henriquebcustodio">
            <FaGithub />
          </a>
          <HomeContactButton>Contact</HomeContactButton>
        </HeroActions>
      </HeroMain>
    </section>
  )
}
export default Home;