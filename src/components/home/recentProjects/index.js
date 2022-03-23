import { RecentProjectsContainer, RecentProjectsList } from "./style";
import { StyledH2 } from "../../heading";
import Project from "../../project";

const RecentProjects = () => {
  return (
    <RecentProjectsContainer>
      <StyledH2>Recent Projects</StyledH2>
      <RecentProjectsList>
        <article style={{ width: '100%' }}>
          <Project></Project>
        </article>
      </RecentProjectsList>
    </RecentProjectsContainer>
  );
};
export default RecentProjects;