import { useEffect, useState } from "react";
import { StyledH2 } from "../../heading"
import { TechnologiesContainer } from "./style";
import Technology from "../../technology"
import { getTechnologies } from "../../../services/strapi";
import Loading from "../../loading";

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTechnologies();
        setTechnologies(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [])

  return (
    <section>
      <StyledH2>Technologies</StyledH2>
      {technologies.length > 0 &&
        <TechnologiesContainer>
          {technologies.map(technology => {
            const baseUrl = process.env.REACT_APP_STRAPI_URL;
            return (
              <Technology
                iconSrc={baseUrl + technology.icon.url}
                name={technology.name}
                key={technology.id}
              />
            )
          })}
        </TechnologiesContainer>
      }
      {technologies.length === 0 &&
        <Loading type="spin" height="2.5rem" width="2.5rem" />
      }
    </section>
  )
}
export default Technologies