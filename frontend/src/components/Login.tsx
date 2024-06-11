import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ip, setIp] = useState(localStorage.getItem('ip') || '');

  useEffect(() => {
    // Carregar o IP salvo no localStorage quando o componente for montado
    const savedIp = localStorage.getItem('ip');
    if (savedIp) {
      setIp(savedIp);
    }
  }, []);

  const handleLogin = async () => {
    try {
      await axios.post(`http://${ip}:3000/auth/login`, {
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

  const handleIpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIp(value);
    // Salvar o IP no localStorage
    localStorage.setItem('ip', value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Entrar na conta</h2>
        <input
          type="text"
          placeholder="IP"
          value={ip}
          onChange={handleIpChange}
          className="w-full p-2 mb-4 border rounded-md"
        />
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
