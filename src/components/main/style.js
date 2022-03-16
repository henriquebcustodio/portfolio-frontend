import styled from "styled-components";
import { theme } from "../../shared/theme";
import { HEADER_HEIGHT } from "../../shared/layout";

export const Main = styled.main`
  position: absolute;
  top: ${HEADER_HEIGHT};
  height: calc(100vh - ${HEADER_HEIGHT});
  width: 100%;
  background-color: ${theme.bg.default};
`