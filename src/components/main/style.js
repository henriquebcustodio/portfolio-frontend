import styled from "styled-components";
import { theme } from "../../shared/theme";
import { HEADER_HEIGHT, MAX_CONTENT_WIDTH, TABLET_BREAK } from "../../shared/layout";

export const Main = styled.main`
  position: absolute;
  top: ${HEADER_HEIGHT};
  padding: 2.5rem 2rem 2rem;
  box-sizing: border-box;
  min-height: calc(100vh - ${HEADER_HEIGHT});
  width: 100%;
  background-color: ${theme.bg.default};

  @media screen and (min-width: ${TABLET_BREAK}) {
    padding: 4rem 2rem 2rem;
  }
`

export const Content = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: ${MAX_CONTENT_WIDTH};
`