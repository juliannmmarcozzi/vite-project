type LoggedInProps = {
  name: string;
  handleLogout: () => void;
};

export default function LoggedIn({
  name,
  handleLogout,
}: LoggedInProps) {
  return (
    <div className="card">
      <h2>¡Bienvenido!</h2>

      <p>Hola, {name}</p>

      <button onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}