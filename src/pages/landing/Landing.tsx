import React, { FunctionComponent } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default Landing;
