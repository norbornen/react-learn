import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginControl } from './LoginControl';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="collapse navbar-collapse">
        <div className="navbar-nav mr-auto">
          <NavLink to="/clock" className="nav-link">Clock</NavLink>
          <NavLink to="/test" className="nav-link">Test</NavLink>
        </div>
        <LoginControl />
      </div>
    </nav>
  );
}
