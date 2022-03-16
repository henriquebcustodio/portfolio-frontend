import styled from "styled-components";
import { theme } from "../../shared/theme";
import { HEADER_HEIGHT, MAX_CONTENT_WIDTH } from "../../shared/layout";

export const Main = styled.main`
  position: absolute;
  top: ${HEADER_HEIGHT};
  padding: 4rem 2rem 2rem;
  box-sizing: border-box;
  height: calc(100vh - ${HEADER_HEIGHT});
  width: 100%;
  background-color: ${theme.bg.default};
`

export const Content = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: ${MAX_CONTENT_WIDTH};
`