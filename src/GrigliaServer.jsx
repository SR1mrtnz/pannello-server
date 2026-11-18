// src/GrigliaServer.jsx
// Le sei schede, una per riga, dentro una <section className="griglia">.
// Per questa volta si scrivono a mano: map() arriva la settimana 8.
// Riceve una prop array "servers".

import SchedaServer from "./SchedaServer"

function GrigliaServer({ servers }) {
  return (
    <section className="griglia">
      <SchedaServer server={servers[0]} />
      <SchedaServer server={servers[1]} />
      <SchedaServer server={servers[2]} />
      <SchedaServer server={servers[3]} />
      <SchedaServer server={servers[4]} />
      <SchedaServer server={servers[5]} />
    </section>
  )
}

export default GrigliaServer
