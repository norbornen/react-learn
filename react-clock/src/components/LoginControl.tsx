import React, { useState } from 'react';

const UserGreeting: React.FC<{ className?: string }> = ({ className }) => {
  return <span className={className} style={{color: 'white'}}>С возвращением!</span>;
}

const GuestGreeting: React.FC<{ className?: string }> = ({ className }) => {
  return <span className={className} style={{color: 'white'}}>Войдите, пожалуйста &rarr;</span>;
}

const Greeting: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn = false }) => {
  if (isLoggedIn) {
    return <UserGreeting className="mr-4" />;
  }
  return <GuestGreeting className="mr-2" />;
}

const LoginButton: React.FC<{ onClick(): void }> = ({ onClick }) => {
  return (
    <button className="btn btn-outline-light" onClick={onClick}>Войти</button>
  );
}

const LogoutButton: React.FC<{ onClick(): void }> = ({ onClick }) => {
  return (
    <button className="btn btn-outline-light" onClick={onClick}>Выйти</button>
  );
}

export const LoginControl: React.FC = () => {
  const [ state, setState ] = useState({
    isLoggedIn: false
  });

  const handleLoginClick = () => setState({ isLoggedIn: true });
  const handleLogoutClick = () => setState({ isLoggedIn: false });

  return (
    <div>
      <Greeting isLoggedIn={state.isLoggedIn} />
      { state.isLoggedIn ? <LogoutButton onClick={handleLogoutClick} /> : <LoginButton onClick={handleLoginClick} />}
    </div>
  )
}
