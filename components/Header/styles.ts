import styled from 'styled-components';
import { THeaderButton } from '../../types/THeaderButton';

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-auto-rows: 67px;
  background-color: #6d1d3c;
  color: white;

  @media (max-width: 875px) {
    grid-template-columns: 8fr 1fr;
    grid-auto-rows: 80px 300px;
  }
`;

export const AppNameContainer = styled.div`
  align-self: center;
  margin: 0 0 0 25px;
`;

export const AppName = styled.h3`
  margin: 0;
`;

export const BurgerMenuContainer = styled.div`
  display: none;

  @media screen and (max-width: 875px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BurgerMenu = styled.button`
  cursor: pointer;
  border: 0;
  font-size: 25px;
  display: none;
  margin: 0;
  width: 40px;
  height: 34px;
  border-radius: 8px;

  @media screen and (max-width: 875px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 0 25px 0 0;

  @media screen and (max-width: 875px) {
    display: ${(props) => (props.hidden ? 'grid' : 'none')};
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 50px) repeat(2, 60px);
    grid-column-start: 1;
    grid-column-end: 3;
    justify-self: center;
    align-self: center;
    border-top: 0.5px solid white;
    height: 100%;
    width: 100%;
    margin: 0;
  }
`;

export const LinkRouter = styled.a`
  color: ${(props) => props.theme.fg};
  margin: 0 15px;
  text-decoration: none;

  @media screen and (max-width: 875px) {
    margin: 0;
    align-self: center;
    justify-self: center;
  }
`;

export const HeaderButton = styled.button`
  display: ${(props) => props.theme.show};
  color: ${(props) => props.theme.fg};
  border: 1px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
  font-size: 1em;
  margin: 1em;
  padding: 5px 34px;
  border-radius: 4px;

  @media screen and (max-width: 875px) {
    height: 45px;
    margin: 0;
    width: 116px;
    align-self: center;
    justify-self: center;
  }
`;

export const invertTheme = ({ fg, bg }: THeaderButton) => ({
  fg: bg,
  bg: fg,
});
