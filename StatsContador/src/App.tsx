import { useState } from 'react'

function App() {
  const [contador, setContador] = useState(0)
  const [texto, setTexto] = useState('')

  return (
    <div>
      <h1>Manejo de Estados</h1>

      <h2>Contador: {contador}</h2>

      <button onClick={() => setContador(contador + 1)}>
        Incrementar (+1)
      </button>

      <button onClick={() => setContador(contador - 1)}>
        Decrementar (-1)
      </button>

      <button onClick={() => setContador(0)}>
        Reiniciar (0)
      </button>

      <h2>Previsualizador de texto</h2>

      <input
        type="text"
        value={texto}
        onChange={(event) => setTexto(event.target.value)}
      />

      <p>Texto ingresado: {texto}</p>
    </div>
  )
}

export default App