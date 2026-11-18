// src/BadgeStato.jsx
// Il badge colorato che dice lo stato del server.
// Riceve SOLO la stringa "stato": non gli serve il server intero.
// Tre ternari annidati, come statoServer: la stringa decide testo e colore.

function BadgeStato({ stato }) {
  const testo =
    stato === "ok"         ? "OK"
    : stato === "attenzione" ? "Attenzione"
    : stato === "critico"    ? "Critico"
    : "Offline"

  return <span className={`badge badge-${stato}`}>{testo}</span>
}

export default BadgeStato
