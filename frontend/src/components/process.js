import React from "react"

//===============COMPONENT_PROCESS===============

export default function Process() {
  return (
    <section className="Process">
      <h2>Prozess</h2>
      <div class="Process-Grid">
        <div className="Process-Stage A">
          <h3 className="bold">Beratungsgespräch</h3>
          <text>
            Wir besprechen mit Ihnen die Anforderungen an die Website.
          </text>
        </div>
        <div className="Process-Stage B">
          <h3 className="bold">Angebot</h3>
          <text>Sie erhalten ein Angebot von uns.</text>
        </div>
        <div className="Process-Stage C">
          <h3 className="bold">Planung</h3>
          <text>Wir planen die Struktur der Website mit ihrem Input.</text>
        </div>
        <div className="Process-Stage D">
          <h3 className="bold">Inhaltssammlung</h3>
          <text>
            Sie liefern uns die Texte und Fotos, die auf der Website erscheinen
            werden.
          </text>
        </div>
        <div className="Process-Stage E">
          <h3 className="bold">Design</h3>
          <text>
            Wir erstellen Designs der Website und teilen diese mit Ihnen.
          </text>
        </div>
        <div className="Process-Stage F">
          <h3 className="bold">Entwicklung</h3>
          <text>
            Wir entwickeln die Website und Sie bekommen Prototypen zu sehen.
          </text>
        </div>
        <div className="Process-Stage G">
          <h3 className="bold">Veröffentlichung</h3>
          <text>
            Eine Domain wird gekauft und die Website wird gehostet
            (veröffentlicht).
          </text>
        </div>
        <div className="Process-Stage H">
          <h3 className="bold">Wartung</h3>
          <text>
            Wir erneuern auf Anfrage Inhalt, Design oder Layout der Website.
          </text>
        </div>

        <div className="Process-Line"></div>
        <div className="Line-Marker"></div>
      </div>
    </section>
  )
}
