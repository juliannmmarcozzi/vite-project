import './App.css'

const jugadores = [
  {
    nombre: 'Lionel Messi',
    descripcion: 'Capitán de la Selección Argentina y campeón del mundo en Qatar 2022.',
    foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lionel_Messi_WC2022.jpg?width=250',
  },
  {
    nombre: 'Ángel Di María',
    descripcion: 'Delantero histórico, autor de goles clave en finales de Selección.',
    foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ángel_Di_María_2017.jpg?width=250',
  },
  {
    nombre: 'Emiliano Martínez',
    descripcion: 'Arquero titular, figura en la Copa América 2021 y el Mundial 2022.',
    foto: 'https://commons.wikimedia.org/wiki/Special:FilePath/Emiliano_Martinez.jpg?width=250',
  },
]

function App() {
  return (
    <div className="page">
      <h1>Selección Argentina</h1>
      <div className="cards">
        {jugadores.map((jugador) => (
          <div className="card" key={jugador.nombre}>
            <img src={jugador.foto} alt={jugador.nombre} />
            <h2>{jugador.nombre}</h2>
            <p>{jugador.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
