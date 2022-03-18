import styled from "styled-components";
import { theme } from "../../../shared/theme"
import { outline } from "../../button/style";

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  height: max-content;
  flex-direction: column;
  /* animation: slideIn 500ms; */
  margin-bottom: 4.5rem;

  @keyframes slideIn {
    from {
      left: -100%;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  }

  h1 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    font-weight: 500;
    color: ${theme.text.highlight};
  }

  p {
    color: ${theme.text.default};
    margin: 0.5rem 0;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

export const HeroActions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  a {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }

  svg {
    height: 2rem;
    width: 2rem;
    color: ${theme.text.default};

    &:hover {
      color: ${theme.text.highlight};
    }
  }
`

export const HeroContactButton = styled.a`
  ${outline};
  height: 2rem;
  padding: 0 1rem;
`