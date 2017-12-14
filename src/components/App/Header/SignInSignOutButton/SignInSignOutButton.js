import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoritesNavButtonContainer from '../../../../containers/FavoritesNavButton-container';

const notificationOpts = {
  title: 'You have been Signed Out!',
  message: 'Have a nice day!',
  position: 'tc',
  autoDismiss: 3
};

const SignInSignOutButton = (props) => {
  return (
    <div className='btn-container'>
      {Object.keys(props.activeAccount).length > 0 &&
        <div className='signIn-signOut-container'>
         <h4>{props.activeAccount.name} </h4>
          <Link className='sign-out'
            to='/'
            onClick={() => {
              props.handleSignOut();
              props.changeRoute('/');
              props.alertme(notificationOpts);
            }}>
            <h4> Sign Out</h4>
          </Link>
        </div>
      }
      {Object.keys(props.activeAccount).length === 0 &&
        <div className='signIn-signOut-container'>
          {/* <p className='welcome-message'>Welcome!</p> */}
          <Link className='sign-in'
            to='/signin'>
            <h4>Sign In</h4>
          </Link>
        </div>
      }
      <FavoritesNavButtonContainer />
    </div>
  )
}

export default SignInSignOutButton;

SignInSignOutButton.propTypes = {
  notifications: React.PropTypes.array,
  props: PropTypes.object,
  props: PropTypes.shape({
    activeAccount: PropTypes.object,
    alertme: PropTypes.func,
    changeRoute: PropTypes.func,
    handleResetFavs: PropTypes.func,
    handleSignOut: PropTypes.func
  })
};