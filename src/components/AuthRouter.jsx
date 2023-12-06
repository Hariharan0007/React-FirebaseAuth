import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Login';
import AuthHeader from './AuthHeader';
import SignUp from "./SignUp";
import { AuthProvider } from "../contexts/AuthContext";
import Dashboard from "./Dashboard";

const AuthRouter = () => {
  return (
    <Router>
      <AuthProvider>
        <AuthHeader/>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AuthRouter