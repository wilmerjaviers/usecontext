'use client'
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { ViewReact } from '../modelos/ViewReact';
import { User } from '../modelos/Auth';

export default function AuthProvider(props: ViewReact) {
 
    
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  
  const [user, setUser] = useState<User | null>(null);


  
  function login(userData: User) {
    setUser(userData);
    setIsAuthenticated(true);
  }


  
  function logout() {
    setUser(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}



export const useAuth = () => {
  return useContext(AuthContext);
};