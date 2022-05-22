import React from 'react';
import { TLayout } from '../../types/TLayout';
import Header from '../Header/Header';

const Layout = ({ children }: TLayout) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
