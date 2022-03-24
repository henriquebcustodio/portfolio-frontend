import styled from "styled-components";
import { DESKTOP_BREAK } from "../../shared/layout";
import { theme } from "../../shared/theme";
import { buttonWrap } from "../button/style";

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  background-color: ${theme.component.default};
  width: 100%;
  box-sizing: border-box;
  box-shadow: 4px 4px 5px -2px rgba(0, 0, 0, 0.5);
  padding: 1rem;

  @media screen and (min-width: ${DESKTOP_BREAK}) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-right: 3rem;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: 3px;
`;

export const ProjectInfo = styled.div`
  margin-top: 1.5rem;

  p {
    color: ${theme.text.default};
  }

  @media screen and (min-width: ${DESKTOP_BREAK}) {
    margin-top: 0;
  }
`;

export const ProjectPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;

  span {
    margin-right: 0.8rem;
    margin-bottom: 1rem;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 1rem;
`;

export const ActionButton = styled.a`
  ${buttonWrap}
  border: 1px solid ${theme.component.highlight};
  padding: 5px 10px;
`;