import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Container } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>VUTTR</h1>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={() => {}}>
        Login
      </button>
      <Link to="/register">Criar conta gratuita</Link>
    </div>
  );
};

export default Login;
