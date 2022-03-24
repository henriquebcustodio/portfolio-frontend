import styled from "styled-components";
import { theme } from "../../shared/theme";

const Pill = styled.span`
  background-color: ${theme.component.highlight};
  color: ${theme.text.highlight};
  border-radius: 999px;
  padding: 5px 10px;
  font-size: 0.8rem;
`;

export default Pill;