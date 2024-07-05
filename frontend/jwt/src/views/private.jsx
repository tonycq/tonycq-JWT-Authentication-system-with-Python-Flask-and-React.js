import React, { useContext } from 'react';
import { AppContext } from '../stored/appContext';
import { useNavigate } from 'react-router-dom';

const Private = () => {
  const { logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    sessionStorage.removeItem('token'); 
    navigate('/');
  };

  return (
    <div className="container">
      
      <p>Hola, Bienvenido!</p>
      <button className="btn btn-danger" onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Private;
