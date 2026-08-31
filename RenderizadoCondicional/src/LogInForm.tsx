type LogInFormProps = {
  name: string;
  password: string;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  onLogin: () => void;
};

export default function LogInForm({
  name,
  password,
  setName,
  setPassword,
  onLogin,
}: LogInFormProps) {
  return (
    <div className="card">
      <h2>Iniciar sesión</h2>

      <input
        type="text"
        placeholder="Usuario"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={onLogin}>
        Iniciar sesión
      </button>
    </div>
  );
}