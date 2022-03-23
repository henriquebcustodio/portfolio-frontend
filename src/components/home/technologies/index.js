import { StyledH2 } from "../../heading";
import { IconsContainer, TechnologiesContainer } from "./style";
import Technology from "../../technology";

const Technologies = ({ technologies }) => {
  return (
    <TechnologiesContainer>
      <StyledH2>Technologies</StyledH2>
      {technologies &&
        <IconsContainer>
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
        </IconsContainer>
      }
    </TechnologiesContainer>
  );
};
export default Technologies;