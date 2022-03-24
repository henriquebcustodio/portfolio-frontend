import styled from "styled-components";
import { DESKTOP_BREAK, TABLET_BREAK } from "../../../shared/layout";

export const RecentProjectsContainer = styled.section`
  margin-top: 4.5rem;
`;

export const RecentProjectsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  margin-top: 3rem;
  width: 100%;

  @media screen and (min-width: ${TABLET_BREAK}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  @media screen and (min-width: ${DESKTOP_BREAK}) {
    grid-template-columns: 1fr;
  }
`;