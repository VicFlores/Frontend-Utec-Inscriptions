import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import { removeCookies } from 'cookies-next';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  AppName,
  AppNameContainer,
  HeaderButton,
  HeaderContainer,
  LinkRouter,
  NavContainer,
  BurgerMenu,
  BurgerMenuContainer,
  theme,
} from './styles';
import { TLayout } from '../../types/TLayout';

const Header = ({ show }: TLayout) => {
  const router = useRouter();
  const [menu, setMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const logout = () => {
    removeCookies('token');
    router.push({
      pathname: '/',
    });
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

          {show?.length ? (
            <>
              <HeaderButton>
                <Link href="/signup" passHref>
                  <LinkRouter>SignUp</LinkRouter>
                </Link>
              </HeaderButton>

              <ThemeProvider theme={{ fg: theme.bg, bg: theme.fg }}>
                <HeaderButton>
                  <Link href="/login" passHref>
                    <LinkRouter> Login</LinkRouter>
                  </Link>
                </HeaderButton>
              </ThemeProvider>
            </>
          ) : (
            <ThemeProvider theme={{ fg: theme.bg, bg: theme.fg, show }}>
              <HeaderButton onClick={logout}>
                <LinkRouter> Logout</LinkRouter>
              </HeaderButton>
            </ThemeProvider>
          )}
        </ThemeProvider>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
