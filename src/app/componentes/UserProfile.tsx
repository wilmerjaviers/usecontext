'use client'
import React, { useState } from 'react';
import { useAuth } from '../Proveedor/AuthProvider';
import { User } from '../modelos/Auth';

export default function UserProfile() {

  const { isAuthenticated, user, login, logout } = useAuth();
  

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      const userData: User = {
        name: formData.name,
        email: formData.email
      };
      login(userData);
    
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Perfil de Usuario</h2>
      
      {isAuthenticated ? (
        <div className="space-y-4">
          <div className="bg-green-100 p-4 rounded-md">
            <p className="text-lg font-medium">¡Bienvenido, {user?.name}!</p>
            <p className="text-gray-500">Email: {user?.email}</p>
          </div>
          <button 
            onClick={logout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-gray-600">No has iniciado sesión.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      )}
    </div>
  );
}