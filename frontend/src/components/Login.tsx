import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:3000/auth/login', {
        username,
        password,
      });

      navigate('/');
    } catch (error) {
      alert('Credenciais inválidas');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Entrar na conta</h2>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full p-2 mb-4 border rounded-md"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full p-2 mb-4 border rounded-md"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;
