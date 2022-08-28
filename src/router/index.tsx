import React from 'react';
import { useRoutes, Navigate } from "react-router-dom";

import Login from '../pages/login';
import Home from '../pages/home';
import BlogList from '../pages/blogList';
import Release from '../pages/release';
import User from '../pages/user'
import Write from '../pages/write'

function Router() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Home />
    },
    {
      path: '/',
      element: <Navigate to='/home' />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path:'/blogList',
      element:<BlogList/>
    },
    {
      path:'/release',
      element:<Release/>
    },
    {
      path:'/user',
      element:<User/>
    },
    {
      path:'/write',
      element:<Write/>
    }
  ])
  return element
}

export default Router;
