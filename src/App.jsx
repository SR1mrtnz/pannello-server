// src/App.jsx
// Il pannello completo: tutte e sette le richieste dell'esercizio.
//
// I dati vivono qui in App e scendono verso il bassio tramite le props.
// Nessun componente modifica quello che riceve.
//
// Per la sfida "Il blackout": cambia solo la riga dell'import qui sotto
// da "./dati" a "./dati-blackout". Nessun'altra modifica.

import "./App.css"
import { sistema, servers, avvisi } from "./dati"
// Per la sfida, commenta la riga sopra e decommenta questa:
// import { sistema, servers, avvisi } from "./dati-blackout"

import { contaPerStato, cpuMedia, piuLento, trovaServer } from "./calcoli"

import Intestazione from "./Intestazione"
import Riepilogo from "./Riepilogo"
import GrigliaServer from "./GrigliaServer"
import ServerInEvidenza from "./ServerInEvidenza"
import Avvisi from "./Avvisi"

// Il nome del server da cercare nella sezione "Server cercato".
// Cambialo per provare: "db-01", "cache-01", "web-09" (non esiste).
const cercato = "db-01"
const serverCercato = trovaServer(servers, cercato)

function App() {
  // Tutto quello che si può calcolare prima del return, lo si calcola qui.
  // I risultati scendono ai componenti come props numeriche o come oggetti.
  const online = servers.filter(s => s.online).length

  return (
    <div className="pannello">
      <Intestazione
        nome={sistema.nome}
        aggiornato={sistema.aggiornato}
        online={online}
        totale={servers.length}
      />
      <Riepilogo
        ok={contaPerStato(servers, "ok")}
        attenzione={contaPerStato(servers, "attenzione")}
        critici={contaPerStato(servers, "critico")}
        offline={contaPerStato(servers, "offline")}
        mediaCpu={cpuMedia(servers)}
        lento={piuLento(servers)}
      />
      <GrigliaServer servers={servers} />
      <ServerInEvidenza cercato={cercato} server={serverCercato} />
      <Avvisi elenco={avvisi} />
    </div>
  )
}

export default App
