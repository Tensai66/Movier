import React from 'react';
import SignUp from '../../../../containers/SignUp-container';
import SignIn from '../../../../containers/SignIn-container';
import FullMovieDetail from '../../../../containers/FullMovieDetail-container';
import PropTypes from 'prop-types';

const Modal = ({ action }) => {

  let modalClass = (action === 'movie') ? 'modal fullmovie-modal' : 'modal sign-modal'

  return (
    <div className='modal-backdrop'>
      <section className={modalClass}>
        {action === 'signup' && <SignUp />}
        {action === 'signin' && <SignIn />}
        {action === 'movie' && <FullMovieDetail />}
      </section>
    </div>
  )
}

export default Modal;

Modal.propTypes = {
  action: PropTypes.string
}
