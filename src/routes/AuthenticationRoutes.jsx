import React from 'react';
import { lazy } from 'react';

// project imports
import Loadable from 'component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const AuthLogin = Loadable(lazy(() => import('../views/Login')));
const AuthRegister = Loadable(lazy(() => import('../views/Register')));
const AuthForgotPassword = Loadable(lazy(() => import('../views/ForgotPassword')));

const Error1 = Loadable(lazy(() => import('../views/Pages/Error/Error1')));
const Error2 = Loadable(lazy(() => import('../views/Pages/Error/Error2')));
const Comingsoon = Loadable(lazy(() => import('../views/Pages/Comingsoon')));

// ==============================|| AUTHENTICATION ROUTES ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/application/login',
      element: <AuthLogin />
    },
    {
      path: '/application/register',
      element: <AuthRegister />
    },
    {
      path: '/register',
      element: <AuthRegister />
    },
    {
      path: '/application/forgot-password',
      element: <AuthForgotPassword />
    },
    {
      path: '/pages/error/error1',
      element: <Error1 />
    },

    {
      path: '/pages/error/error2',
      element: <Error2 />
    },
    {
      path: '/pages/comingsoon',
      element: <Comingsoon />
    }
  ]
};

export default AuthenticationRoutes;
