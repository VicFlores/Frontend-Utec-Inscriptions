import React from 'react';
import { THeaderButton } from '../../types/THeaderButton';
import { TLayout } from '../../types/TLayout';
import Header from '../Header/Header';

const Layout = ({ children, show, textButton }: TLayout) => {
  return (
    <>
      <Header show={show} textButton={textButton} />
      {children}
    </>
  );
};

export default Layout;
