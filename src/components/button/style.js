import { css } from "styled-components";
import { theme } from "../../shared/theme";

export const buttonWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-sizing: border-box;
  width: max-content;
  color: ${theme.text.default};
  cursor: pointer;

  &:hover {
    color: ${theme.text.highlight};
  }
`;

export const outline = css`
  ${buttonWrap}
  border: 2px solid ${theme.component.default};

  &:hover {
    border-color: ${theme.component.highlight};
  }
`;

export const filled = css`
  ${buttonWrap}
  background-color: ${theme.component.highlight};
`;

