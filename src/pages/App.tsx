import React, { useState } from "react";
import  Login from './login'
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom'

function App() {
  const location = useLocation()
  const {pathname} = location
  console.log('pathname',pathname);
  console.log('location',location);
  
  return (
    <Routes>
      <Route element={<Login/>}></Route>
    </Routes>
  );
}

export default App;
