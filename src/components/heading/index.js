import styled from "styled-components";
import { theme } from "../../shared/theme";

export const StyledH2 = styled.h2`
  width: max-content;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 3rem;
  color: ${theme.text.highlight};
  border-bottom: 2px solid ${theme.component.highlight};
`