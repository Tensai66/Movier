import React from 'react';
import SignInSignOutButtonContainer from '../../../containers/SignInSignOutButton-container';
import FavoritesNavButtonContainer from '../../../containers/FavoritesNavButton-container';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='title'>
        <h1>Movier</h1>
      </Link>
      {/* <FavoritesNavButtonContainer /> */}
      <SignInSignOutButtonContainer />
    </header>
  )
}

export default Header;
