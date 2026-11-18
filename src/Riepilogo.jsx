// src/Riepilogo.jsx
// Le sei caselle di numeri sotto l'intestazione.
// Non calcola niente: riceve tutto pronto da App.
// Props: ok, attenzione, critici, offline (numeri),
//        mediaCpu (numero oppure null),
//        lento (server oppure null).

function Riepilogo({ ok, attenzione, critici, offline, mediaCpu, lento }) {
  // Due ternari per la media e due per il più lento: uno per il numero
  // e uno per l'etichetta. Non si può chiamare toFixed(1) su null.
  return (
    <section className="riepilogo">
      <div className="casella">
        <span className="numero">{ok}</span>
        <span className="etichetta">OK</span>
      </div>
      <div className="casella">
        <span className="numero">{attenzione}</span>
        <span className="etichetta">Attenzione</span>
      </div>
      <div className="casella">
        <span className="numero">{critici}</span>
        <span className="etichetta">Critici</span>
      </div>
      <div className="casella">
        <span className="numero">{offline}</span>
        <span className="etichetta">Offline</span>
      </div>
      <div className="casella">
        <span className="numero">{mediaCpu === null ? "—" : `${mediaCpu.toFixed(1)}%`}</span>
        <span className="etichetta">CPU media (server online)</span>
      </div>
      <div className="casella">
        <span className="numero">{lento === null ? "—" : `${lento.latenza} ms`}</span>
        <span className="etichetta">{lento === null ? "Più lento: nessuno" : `Più lento: ${lento.nome}`}</span>
      </div>
    </section>
  )
}

export default Riepilogo
