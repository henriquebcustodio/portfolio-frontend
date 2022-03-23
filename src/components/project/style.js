import styled from "styled-components";
import { theme } from "../../shared/theme";

export const ProjectCard = styled.div`
  border-radius: 5px;
  background-color: ${theme.component.default};
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 35%;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: 5px;
`;

export const ProjectInfo = styled.div`
  margin-top: 1.5rem;

  p {
    color: ${theme.text.default};
  }
`;