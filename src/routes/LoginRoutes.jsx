import React from 'react';
import { lazy } from 'react';

// project import
import Loadable from 'component/Loadable';
import GuestGuard from 'component/Auth/GuestGuard';

import NavMotion from 'layout/NavMotion';
import MinimalLayout from 'layout/MinimalLayout';

const AuthLogin = Loadable(lazy(() => import('../views/Login')));
const AuthRegister = Loadable(lazy(() => import('../views/Register')));
const AuthForgotPassword = Loadable(lazy(() => import('../views/ForgotPassword')));

// ==============================|| LOGIN ROUTES ||============================== //

const LoginRoutes = {
  path: '/',
  element: (
    <NavMotion>
      <GuestGuard>
        <MinimalLayout />
      </GuestGuard>
    </NavMotion>
  ),
  children: [
    {
      path: '/',
      element: <AuthLogin />
    },
    {
      path: '/login',
      element: <AuthLogin />
    },
    {
      path: '/register',
      element: <AuthRegister />
    },
    {
      path: '/forgot-password',
      element: <AuthForgotPassword />
    }
  ]
};

export default LoginRoutes;
