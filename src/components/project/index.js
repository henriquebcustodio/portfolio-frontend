import { StyledH2 } from "../heading";
import { ProjectInfo, ImageContainer, ProjectCard, ProjectImage } from "./style";

const Project = () => {
  return (
    <ProjectCard>
      <ImageContainer>
        <ProjectImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Google_web_search.png/1200px-Google_web_search.png" alt="" />
      </ImageContainer>
      <ProjectInfo>
        <StyledH2>Tsks, just tasks.</StyledH2>
        <p>
          Tsks is a CRUD application where users can track their daily tasks. This application also allows users to create custom collections of tasks and track their completition status via the main dashboard.
        </p>
        <p>
          Tsks was designed by Oliver Cederborg.
        </p>
      </ProjectInfo>
    </ProjectCard>
  );
};
export default Project;