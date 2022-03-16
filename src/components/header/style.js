import styled, { css } from "styled-components";
import { theme } from "../../shared/theme";
import { HEADER_HEIGHT, TABLET_BREAK } from "../../shared/layout";

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

export const Logo = styled.a`
  font-size: 1.5rem;
  color: ${theme.text.highlight};
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
  height: 100vh;
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
  }
`

export const Link = styled.a`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ isActive }) => isActive ? theme.text.highlight : theme.text.default};
  border-bottom: ${({ isActive }) => isActive ? '2px solid ' + theme.component.highlight : 'none'};

  &:hover {
    color: ${theme.text.highlight};
  }

  @media screen and (min-width: ${TABLET_BREAK}) {
    margin-bottom: 0;
    border-bottom: none;
    background-color: ${({ isActive }) => isActive ? theme.component.highlight : 'transparent'};
    padding: 0.2rem 1rem;
    margin: 0 0.5rem;
    border-radius: 8px;
    font-size: 1.2rem;
  }
`

export const Icon = styled.div`
  @media screen and (min-width: ${TABLET_BREAK}) {
    display: none;
  }
`