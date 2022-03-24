import { StyledH2 } from "../heading";
import Pill from "../pill";
import { ProjectInfo, ImageContainer, ProjectCard, ProjectImage, ProjectPills, ActionsContainer, ActionButton } from "./style";

export const RecentProject = () => {
  return (
    <ProjectCard>
      <ImageContainer>
        <ProjectImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Google_web_search.png/1200px-Google_web_search.png" alt="" />
      </ImageContainer>
      <ProjectInfo>
        <StyledH2>Tsks, just tasks.</StyledH2>
        <p>
          Tsks is a CRUD application where users can track their daily tasks. This application also allows users to create custom collections of tasks and track their completion status via the main dashboard.
        </p>
        <ActionsContainer>
          <ActionButton>Details</ActionButton>
        </ActionsContainer>
      </ProjectInfo>
    </ProjectCard>
  );
};

export const Project = () => {
  return (
    <ProjectCard>
      <ImageContainer>
        <ProjectImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Google_web_search.png/1200px-Google_web_search.png" alt="" />
      </ImageContainer>
      <ProjectInfo>
        <StyledH2>Tsks, just tasks.</StyledH2>
        <p>
          Tsks is a CRUD application where users can track their daily tasks. This application also allows users to create custom collections of tasks and track their completion status via the main dashboard.
        </p>
      </ProjectInfo>
      <ProjectPills>
        <Pill>JavaScript</Pill>
        <Pill>HTML</Pill>
        <Pill>CSS</Pill>
        <Pill>Firebase</Pill>
        <Pill>Node.js</Pill>
      </ProjectPills>
    </ProjectCard>
  );
};