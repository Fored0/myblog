import React from 'react';
import { useRoutes } from "react-router-dom";
import Login from '../pages/login';
import Home from '../pages/home';
function Router() {
  const element = useRoutes([
    {
      path:"login",
      element:<Login/>,
    },
    {
      path:"",
      element:<Home/>
    },
  ])
  return element
}

export default Router;
