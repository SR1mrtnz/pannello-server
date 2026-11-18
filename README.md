## Guida per verificare la sfida "Il blackout"

In `src/App.jsx` c'è una riga di `import` commentata. Per provare la sfida
di cambio dati:

1. Commenta la riga `import { sistema, servers, avvisi } from "./dati"`.
2. Decommenta la riga `import { sistema, servers, avvisi } from "./dati-blackout"`.
3. Salva. La pagina si aggiorna da sola: tutti i server diventano offline,
   la casella della CPU mostra "—", il riquadro Avvisi diventa verde.

Finito il collaudo, rimetti `"./dati"` per tornare ai dati normali.


