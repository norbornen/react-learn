import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginControl } from './LoginControl';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="collapse navbar-collapse">
        <div className="navbar-nav mr-auto">
          <NavLink to="/clock" className="nav-link">Clock</NavLink>
          <NavLink to="/translate" className="nav-link">Translate</NavLink>
        </div>
        <LoginControl />
      </div>
    </nav>
  );
}
