import React from 'react';
import { TLayout } from '../../types/TLayout';
import Header from '../Header/Header';

const Layout = ({ children, show }: TLayout) => {
  return (
    <>
      <Header show={show} />
      {children}
    </>
  );
};

export default Layout;
