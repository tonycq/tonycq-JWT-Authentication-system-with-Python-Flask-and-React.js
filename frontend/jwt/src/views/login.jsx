import React, { useContext, useState } from 'react';
import { AppContext } from '../stored/appContext';
import { login } from '../stored/flux';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      setUser(response.user); // Guardar usuario en el contexto global
      localStorage.setItem('token', response.access_token); // Guardar token en localStorage
      navigate('/private'); // Redireccionar a la página privada
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejar error de inicio de sesión
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p className="mt-3">
        ¿No tienes una cuenta? <Link to="/signup">Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default Login;
