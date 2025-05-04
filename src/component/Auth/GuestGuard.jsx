import PropTypes from 'prop-types';
import React from 'react';
import { Navigate } from 'react-router-dom';

// project import
import useAuth from 'hooks/useAuth';

// ==============================|| GUEST GUARD ||============================== //

const GuestGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/dashboard/default" />;
  }

  return children;
};

GuestGuard.propTypes = {
  children: PropTypes.object
};

export default GuestGuard;
