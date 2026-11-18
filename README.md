# pannello-server

Esercizio di laboratorio TPSIT — Il pannello dei server.
React senza stato: JSX, componenti, props. Settimana 7.

Riferimento: Pollini, *Progettare per Innovare* vol. 3, cap. 10.2 (pp. 331–336) e 10.3 (pp. 337–342).

## Come aprire il progetto in VS Code

1. Estrai lo zip in una cartella qualsiasi (per esempio `C:\Users\tuoNome\progetti\`).
2. Apri **Visual Studio Code**.
3. `File → Apri cartella…` e scegli la cartella `pannello-server` appena estratta.
4. Apri il terminale integrato di VS Code: `Terminal → New Terminal`
   (oppure `Ctrl + ì` su Windows, `Cmd + ì` su Mac).
5. Installa le dipendenze la prima volta:

   ```bash
   npm install
   ```

6. Avvia il server di sviluppo:

   ```bash
   npm run dev
   ```

7. VS Code mostra un indirizzo locale tipo `http://localhost:5173`:
   aprilo nel browser con `Ctrl + click` (o `Cmd + click`).

Per fermare il server di sviluppo: nel terminale premi `Ctrl + C` (oppure `Cmd + C`).

## Cosa contiene il progetto

```
pannello-server/
├── index.html              Pagina HTML con il div #root
├── package.json            Dipendenze e script di Vite
├── vite.config.js          Configurazione di Vite + plugin React
├── .gitignore
├── README.md               Questo file
└── src/
    ├── main.jsx            Punto di ingresso (renderizza <App/>)
    ├── index.css           Vuoto
    ├── App.css             Foglio di stile del pannello (fornito dal lab)
    ├── App.jsx             Composizione di tutti i componenti
    ├── dati.js             I sei server, sistema e avvisi (NON modificare)
    ├── dati-blackout.js    I sei server tutti offline, per la sfida
    ├── calcoli.js          SOGLIE, statoServer, contaPerStato,
    │                       cpuMedia, piuLento, trovaServer
    ├── Intestazione.jsx    Nome piattaforma, aggiornamento, online/totale
    ├── Riepilogo.jsx       Sei caselle di numeri
    ├── GrigliaServer.jsx   Sei <SchedaServer> in una griglia
    ├── SchedaServer.jsx    Scheda di un server, con <BadgeStato>
    ├── BadgeStato.jsx      Badge colorato dello stato
    ├── ServerInEvidenza.jsx  Server cercato per nome (riusa SchedaServer)
    └── Avvisi.jsx          Fascia degli avvisi in fondo
```

## Comandi disponibili

| Comando           | Cosa fa                                                  |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Avvia il server di sviluppo su `localhost:5173`         |
| `npm run build`   | Crea la build di produzione nella cartella `dist/`      |
| `npm run preview` | Mostra in anteprima la build di produzione              |

## La sfida "Il blackout"

In `src/App.jsx` c'è una riga di `import` commentata. Per provare la sfida
di cambio dati:

1. Commenta la riga `import { sistema, servers, avvisi } from "./dati"`.
2. Decommenta la riga `import { sistema, servers, avvisi } from "./dati-blackout"`.
3. Salva. La pagina si aggiorna da sola: tutti i server diventano offline,
   la casella della CPU mostra "—", il riquadro Avvisi diventa verde.

Finito il collaudo, rimetti `"./dati"` per tornare ai dati normali.

## Risultato atteso con i dati normali

- **Intestazione blu**: "Piattaforma Ordini · 5 server online su 6 ·
  aggiornato il 11/11/2026 alle 10:15"
- **Riepilogo**: 2 OK · 2 Attenzione · 1 Critici · 1 Offline ·
  CPU media 55.0% · Più lento: backup-01 (120 ms)
- **Griglia**: sei schede, con bordo colorato (verde / arancione / rosso /
  grigio). `cache-01` è offline, con sfondo grigio.
- **Server cercato**: la scheda di `db-01`, identica a quella della griglia.
- **Avvisi**: due stringhe separate da " · " su sfondo ambrato.

## Estensioni VS Code utili (facoltative)

- **ES7+ React/Redux/React-Native snippets**
- **Prettier - Code formatter**

VS Code riconosce automaticamente i file `.jsx` e offre evidenziazione,
completamento e formattazione.
