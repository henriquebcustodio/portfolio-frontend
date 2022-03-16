import styled, { css } from "styled-components";
import { theme } from "../../shared/theme";
import { HEADER_HEIGHT, TABLET_BREAK } from "../../shared/layout";
import { outline } from "../button/style";
import { NavLink, Link as RouterLink } from "react-router-dom";

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${HEADER_HEIGHT};
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 2rem;
  background-color: ${theme.bg.nav};
  z-index: 10;
  box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 0.5);
`

export const Logo = styled(RouterLink)`
  font-size: 1.5rem;
  text-decoration: none;
  color: ${theme.text.default};
  cursor: pointer;

  &:hover {
    color: ${theme.text.highlight};
  }
`

const hiddenLinks = css`
  left: -100%;
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${HEADER_HEIGHT};
  left: 0;
  height: calc(100vh - ${HEADER_HEIGHT});
  width: 100%;
  box-sizing: border-box;
  padding: 1.5rem;
  background-color: ${theme.bg.nav};
  border-top: 2px solid ${theme.component.default};
  overflow: hidden;

  @media screen and (max-width: ${TABLET_BREAK}) {
    ${({ isOpen }) => isOpen ? '' : hiddenLinks};
    transition: left 300ms ease-out;
  }

  @media screen and (min-width: ${TABLET_BREAK}) {
    position: static;
    flex-direction: row;
    width: max-content;
    height: 100%;
    padding: 0;
    border-top: none;
    background-color: transparent;
    column-gap: 0.5rem;
  }
`

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  height: 2.2rem;
  box-sizing: border-box;
  cursor: pointer;
  color: ${theme.text.default};

  &.active {
    color: ${theme.text.highlight};
    border-bottom: 2px solid ${theme.component.highlight};
  }

  &:hover {
    color: ${theme.text.highlight};
  }

  @media screen and (min-width: ${TABLET_BREAK}) {
    margin-bottom: 0;
    padding: 0.5rem 1rem;
    border-radius: 5px;

    &.active {
      background-color: ${theme.component.highlight};
      border-bottom: none;
    }
  }
`

export const HeaderContactButton = styled.a`
  ${outline}
  font-size: 1.2rem;
  height: 2.2rem;
`

export const Icon = styled.div`
  @media screen and (min-width: ${TABLET_BREAK}) {
    display: none;
  }
`