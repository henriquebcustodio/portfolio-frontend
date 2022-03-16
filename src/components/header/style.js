import styled, { css } from "styled-components";
import { theme } from "../../shared/theme";
import { HEADER_HEIGHT, TABLET_BREAK } from "../../shared/layout";

export const Navbar = styled.nav`
  position: absolute;
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
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 5rem 1rem 1.5rem;
  background-color: ${theme.bg.nav};
  overflow: hidden;
  z-index: -1;

  @media screen and (max-width: ${TABLET_BREAK}) {
    ${({ isOpen }) => isOpen ? '' : hiddenLinks};
    transition: left 300ms ease-out;
  }

  @media screen and (min-width: ${TABLET_BREAK}) {
    position: relative;
    flex-direction: row;
    width: max-content;
    height: 100%;
    padding: 0;
    background-color: transparent;
  }
`

export const Link = styled.a`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ isActive }) => isActive ? theme.text.highlight : theme.text.default};
  border-bottom: ${({ isActive }) => isActive ? '2px solid' + theme.component.highlight : 'none'};

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
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.text.default};
  cursor: pointer;

  &:hover {
  color: ${theme.text.highlight};
  }

  @media screen and (min-width: ${TABLET_BREAK}) {
    display: none;
  }
`