import styled from "styled-components";
import { TABLET_BREAK } from "../../../shared/layout";

export const TechnologiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  row-gap: 2rem;
  width: 100%;
  overflow-x: hidden;

  @media screen and (min-width: ${TABLET_BREAK}) {
    grid-template-columns: repeat(6, 1fr);
  }
`