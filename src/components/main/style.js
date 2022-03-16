import styled from "styled-components";
import { theme } from "../../shared/theme";
import { HEADER_HEIGHT } from "../../shared/layout";

export const Main = styled.main`
  position: absolute;
  padding-top: ${HEADER_HEIGHT};
  min-height: calc(100vh - ${HEADER_HEIGHT});
  width: 100%;
  background-color: ${theme.bg.default};
`