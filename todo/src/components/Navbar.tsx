import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper pink lighten-2 ph4">
        <NavLink to="/" className="brand-logo">Todo: React + Typescript</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/">Список дел</NavLink></li>
          <li><NavLink to="/about">О проекте</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};
