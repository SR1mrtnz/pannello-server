// src/SchedaServer.jsx
// La scheda di un server. È il componente più importante del pannello.
// Riceve una sola prop, "server": l'oggetto intero.
// Dentro la scheda c'è anche un <BadgeStato />, che riceve solo lo stato.

import BadgeStato from "./BadgeStato"
import { statoServer } from "./calcoli"

function SchedaServer({ server }) {
  // Prima destrutturo la prop (settimana 3), poi i campi dell'oggetto.
  const { nome, ruolo, sede, ip, cpu, latenza, servizi, manutenzione } = server
  const stato = statoServer(server)

  // Per ogni dato che può mancare, un ternario sceglie fra il valore
  // e una riserva. Attenzione a non confondere "0" con "null":
  // un server acceso con cpu: 0 deve mostrare "CPU: 0%", non "CPU: —".
  // Per i servizi il controllo è sulla length, non sull'array: un array
  // vuoto è truthy, ma non ha elementi da mostrare.
  return (
    <div className={`scheda scheda-${stato}`}>
      <h3>{nome} <BadgeStato stato={stato} /></h3>
      <p className="ruolo">{ruolo} · {sede} · {ip}</p>
      <p>CPU: {cpu === null ? "—" : `${cpu}%`}</p>
      <p>Latenza: {latenza === null ? "—" : `${latenza} ms`}</p>
      <p>Servizi: {servizi.length === 0 ? "nessuno" : servizi.join(", ")}</p>
      <p>Manutenzione: {manutenzione ? `${manutenzione.data}, ${manutenzione.motivo}` : "nessuna in programma"}</p>
    </div>
  )
}

export default SchedaServer
