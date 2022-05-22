import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  AppName,
  AppNameContainer,
  HeaderButton,
  HeaderContainer,
  LinkRouter,
  NavContainer,
  theme,
  invertTheme,
  BurgerMenu,
  BurgerMenuContainer,
} from './styles';

const Header = () => {
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
        <ThemeProvider theme={theme}>
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
            <Link href="/" passHref>
              <LinkRouter>SignUp</LinkRouter>
            </Link>
          </HeaderButton>
          <ThemeProvider theme={invertTheme}>
            <HeaderButton>
              <Link href="/login" passHref>
                <LinkRouter>Login</LinkRouter>
              </Link>
            </HeaderButton>
          </ThemeProvider>
        </ThemeProvider>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
