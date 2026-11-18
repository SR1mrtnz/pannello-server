// src/Avvisi.jsx
// La fascia degli avvisi in fondo al pannello.
// Riceve una prop "elenco": un array di stringhe.
// Se l'elenco è vuoto, la fascia diventa verde e dice "Nessun avviso".
//
// Attenzione: l'array vuoto è truthy. Il controllo giusto è sulla length,
// non sull'array stesso. join di un array vuoto è una stringa vuota,
// non "Nessun avviso": serve il ternario esplicito.

function Avvisi({ elenco }) {
  const vuoto = elenco.length === 0
  return (
    <section className={vuoto ? "avvisi avvisi-vuoto" : "avvisi"}>
      <h2>Avvisi ({elenco.length})</h2>
      <p>{vuoto ? "Nessun avviso" : elenco.join(" · ")}</p>
    </section>
  )
}

export default Avvisi
