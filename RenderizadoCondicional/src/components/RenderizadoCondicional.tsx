import { useState } from "react";
import "../App.css";
import LogInForm from "./LogInForm";
import LoggedIn from "./LoggedIn";

export default function RenderizadoCondicional() {
  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
    setName("");
    setPassword("");
  };

  return (
    <div className="card-container">
      {isLogged ? (
        <LoggedIn
          name={name}
          handleLogout={handleLogout}
        />
      ) : (
        <LogInForm
          name={name}
          password={password}
          setName={setName}
          setPassword={setPassword}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}