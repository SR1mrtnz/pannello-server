// src/Intestazione.jsx
// La fascia blu in cima. Non calcola niente: riceve numeri già pronti.
// Props: nome, aggiornato, online (numero), totale (numero).

function Intestazione({ nome, aggiornato, online, totale }) {
  return (
    <header className="intestazione">
      <h1>{nome}</h1>
      <p>{online} server online su {totale} · aggiornato il {aggiornato}</p>
    </header>
  )
}

export default Intestazione
