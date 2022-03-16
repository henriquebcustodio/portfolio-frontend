import { css } from "styled-components";
import { theme } from "../../shared/theme";

export const outline = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  border-radius: 5px;
  border: 2px solid ${theme.component.default};
  box-sizing: border-box;
  color: ${theme.text.default};
  cursor: pointer;

  &:hover {
    color: ${theme.text.highlight};
    border-color: ${theme.component.highlight};
  }
`