import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import './Login.css'; // Importe o arquivo de estilos CSS

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { email: username, password: password }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    try {
      const response = await fetch('http://localhost:3000/login', options);
      const result = await response.json();
      if (response.ok) {
        console.log('Usuário logado com sucesso:', result);
        window.location.href='/';
        localStorage.setItem('isAuthenticated','true');
      } else {
        console.error('Usuário nao existe:', result);
        window.location.href='/login';
        localStorage.setItem('isAuthenticated','false');
      }
    } catch (err) {
      console.error('Erro ao logar usuário:', result);
      window.location.href='/login';
      localStorage.setItem('isAuthenticated','false');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label>Email: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
