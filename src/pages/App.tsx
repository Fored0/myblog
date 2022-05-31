import React, { ReactNode, useState } from "react";
import  Login from './login'
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom'

function App() {
  // const location = useLocation()
  // const {path} = location
  // console.log(useLocation());

  return (
    <Routes>
      <Route element={<Login/>}></Route>
    </Routes>
  );
}

export default App;
