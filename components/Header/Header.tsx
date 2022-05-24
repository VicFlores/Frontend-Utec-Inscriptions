import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { TLayout } from '../../types/TLayout';
import {
  AppName,
  AppNameContainer,
  HeaderButton,
  HeaderContainer,
  LinkRouter,
  NavContainer,
  BurgerMenu,
  BurgerMenuContainer,
  invertTheme,
} from './styles';

const Header = ({ show, textButton }: TLayout) => {
  const [menu, setMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <HeaderContainer>
      <AppNameContainer>
        <AppName>Utec-inscriptions</AppName>
      </AppNameContainer>

      <BurgerMenuContainer>
        <BurgerMenu onClick={handleMenu}>
          <AiOutlineMenu />
        </BurgerMenu>
      </BurgerMenuContainer>

      <NavContainer hidden={menu}>
        <ThemeProvider theme={{ fg: 'white', bg: '#6D1D3C', show }}>
          <Link href="/" passHref>
            <LinkRouter>Home</LinkRouter>
          </Link>
          <Link
            href="https://portal.utec.edu.sv/(S(1nta1wajkw3percvqreoybjr))/login.aspx"
            passHref
          >
            <LinkRouter>Portal</LinkRouter>
          </Link>
          <Link href="https://www.utecvirtual.edu.sv/" passHref>
            <LinkRouter>Classroom</LinkRouter>
          </Link>

          <HeaderButton>
            <Link href="/signup" passHref>
              <LinkRouter>SignUp</LinkRouter>
            </Link>
          </HeaderButton>
          <ThemeProvider theme={invertTheme}>
            <HeaderButton>
              <Link href="/login" passHref>
                <LinkRouter>{textButton ? textButton : 'Login'}</LinkRouter>
              </Link>
            </HeaderButton>
          </ThemeProvider>
        </ThemeProvider>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
