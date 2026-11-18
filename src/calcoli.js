// src/calcoli.js
// Logica del pannello: niente JSX, niente React.
// Solo funzioni che ricevono dati e restituiscono valori.

// Soglie di CPU per scegliere lo stato del server.
// "attenzione": 70% o più. "critico": 90% o più.
export const SOGLIE = { attenzione: 70, critico: 90 }

// Restituisce lo stato di un server come stringa.
// L'ordine dei controlli conta: prima si guarda "online", poi la CPU.
//   "offline"     se il server non è online
//   "critico"     se la CPU è >= SOGLIE.critico
//   "attenzione"  se la CPU è >= SOGLIE.attenzione
//   "ok"          negli altri casi
//
// Tre ternari annidati, letti come if / else if / else.
// Se il server è offline, cpu è null: null >= 90 e null >= 70 sono false,
// ma non arriviamo mai a quei controlli perché la prima condizione è vera.
export function statoServer(server) {
  return !server.online
    ? "offline"
    : server.cpu >= SOGLIE.critico
      ? "critico"
      : server.cpu >= SOGLIE.attenzione
        ? "attenzione"
        : "ok"
}

// Conta quanti server sono nello stato passato.
// Riutilizza statoServer: le condizioni dello stato vivono in un solo posto.
export function contaPerStato(servers, stato) {
  return servers.filter(s => statoServer(s) === stato).length
}

// Media della CPU dei soli server online.
// Se nessun server è online, restituisce null (una media su zero elementi
// non esiste: 0/0 in JavaScript è NaN, e NaN in pagina si vedrebbe "NaN%").
export function cpuMedia(servers) {
  const online = servers.filter(s => s.online)
  if (online.length === 0) return null
  const somma = online.reduce((acc, s) => acc + s.cpu, 0)
  return somma / online.length
}

// Fra i server online, quello con la latenza più alta.
// Restituisce il server intero, non solo il numero.
// Se nessun server è online, restituisce null.
//
// reduce con valore iniziale null: a ogni passo, se l'accumulatore è null
// (siamo al primo elemento) oppure il server corrente è più lento, teniamo
// il server corrente. Il valore iniziale null è obbligatorio: senza, su un
// array vuoto, reduce lancerebbe "Reduce of empty array with no initial value".
export function piuLento(servers) {
  const online = servers.filter(s => s.online)
  return online.reduce((piuLentoFinora, s) => {
    if (piuLentoFinora === null || s.latenza > piuLentoFinora.latenza) return s
    return piuLentoFinora
  }, null)
}

// Cerca un server per nome. Restituisce l'oggetto intero, oppure undefined
// se non esiste nessun server con quel nome.
export function trovaServer(servers, nome) {
  return servers.find(s => s.nome === nome)
}
