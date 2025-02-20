import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  // Estados para armazenar as entradas do usuário
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  // Função para enviar o form
  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Enviando seus dados " + username + " " + password);
  };

  return (
    <div>
      <div className="contanier">
        <form onSubmit={handleSubmit}>
          <h1>Acesse ao Sistema</h1>
          <div className="input-field">
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <FaLock className="icon" />
          </div>
          <div className="forget">
            <label>
              <input type="checkbox" /> Lembrar de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <button>Entrar</button>
          <div className="signup-link">
            <p>
              Não tem uma conta? <a href="#">Registrar</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
