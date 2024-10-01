import React from 'react';
import  Headers  from '../UI/Headers'; // Assuming Headers is a named export
import  Footers  from '../UI/Footers'; // Assuming Footers is a named export
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet/>
      <Footers />
    </>
  );
};
