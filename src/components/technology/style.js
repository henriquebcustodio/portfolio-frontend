import styled from "styled-components";
import { theme } from "../../shared/theme";

export const TechnologyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
`

export const TechnologyIcon = styled.img`
  height: 3.5rem;
`

export const TechnologyName = styled.span`
  color: ${theme.text.default};
  margin-top: 0.7rem;
`