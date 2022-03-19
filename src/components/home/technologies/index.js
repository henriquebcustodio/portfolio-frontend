import { StyledH2 } from "../../heading";
import { TechnologiesContainer } from "./style";
import Technology from "../../technology";

const Technologies = ({ technologies }) => {
  return (
    <section>
      <StyledH2>Technologies</StyledH2>
      {technologies &&
        <TechnologiesContainer>
          {technologies.map(technology => {
            const baseUrl = process.env.REACT_APP_STRAPI_URL;
            return (
              <Technology
                iconSrc={baseUrl + technology.icon.url}
                name={technology.name}
                key={technology.id}
              />
            );
          })}
        </TechnologiesContainer>
      }
    </section>
  );
};
export default Technologies;