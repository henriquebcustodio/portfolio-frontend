import styled from "styled-components";
import { MOBILE_BREAK, TABLET_BREAK } from "../../../shared/layout";

export const TechnologiesContainer = styled.section`
  margin-top: 4.5rem;
`;

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  row-gap: 2rem;
  margin-top: 3rem;
  width: 100%;
  overflow-x: hidden;

  @media screen and (min-width: ${MOBILE_BREAK}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${TABLET_BREAK}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;