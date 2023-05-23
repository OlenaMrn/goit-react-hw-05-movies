import React from 'react';
import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import css from './Layout.module.css';
// import styled from 'styled-components';

const Layout = () => {
  const location = useLocation();

  const getNavLinkClassName = path => {
    return location.pathname === path ? css.activeNavLink : css.inactiveNavLink;
  };




  return (
    <div className={css.container}>
      <nav className={css.headerNav}>
        <NavLink
          to="/"
          className={getNavLinkClassName('/')}
          activeclassname={css.activeNavLink}
        >
          <span className={css.navText}>Home</span>
        </NavLink>
        <NavLink
          to="/movies"
          className={getNavLinkClassName('/movies')}
          activeclassname={css.activeNavLink}
        >
          <span className={css.navText}>Movies</span>
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;


