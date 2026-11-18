// src/ServerInEvidenza.jsx
// Mostra il server cercato per nome.
// Riusa SchedaServer: è lo stesso componente, con gli stessi dati.
// Props: cercato (il nome cercato), server (il risultato della ricerca,
//        un oggetto oppure undefined).

import SchedaServer from "./SchedaServer"

function ServerInEvidenza({ cercato, server }) {
  // Il ternario non sceglie solo fra due stringhe: può scegliere fra due
  // elementi JSX. Qui sotto l'<h2> c'è la scheda, oppure il messaggio
  // "non trovato".
  return (
    <section className="evidenza">
      <h2>Server cercato: {cercato}</h2>
      {server === undefined
        ? <p className="non-trovato">Nessun server si chiama {cercato}</p>
        : <SchedaServer server={server} />}
    </section>
  )
}

export default ServerInEvidenza
