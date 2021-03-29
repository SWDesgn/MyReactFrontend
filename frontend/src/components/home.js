import React, { Component, useRef, useEffect } from "react"

import { navigate } from "gatsby"

import Projects from "./projects"
import Services from "./services"
import Process from "./process"

import Button from "react-bootstrap/Button"

import "../components/layout.css"
//===============COMPONENT_HOME===============

export default function Home() {
  return (
    <div className="Home">
      <div id="mission" style={{ scrollMarginTop: "65px" }}>
        <Mission />
      </div>
      <div id="projects" style={{ scrollMarginTop: "65px" }}>
        <Projects />
      </div>
      <div id="services" style={{ scrollMarginTop: "65px" }}>
        <Services />
      </div>
      <div id="process" style={{ scrollMarginTop: "65px" }}>
        <Process />
      </div>
      <ContactUs />
    </div>
  )
}

function Mission() {
  return (
    <section className="Mission">
      <h2>
        <q>
          Wir bieten Ihnen eine äußerst effektive und hochqualitative Website
          zugeschnitten auf Ihr Unternehmen an.
        </q>
      </h2>
      <br></br>
      <h3>- Nikolai und Oliver Altergott, Gründer von Altergott Webdesign</h3>
    </section>
  )
}

function ContactUs() {
  // const history = useHistory();

  function handleClick() {
    //  history.push("/contact");
    navigate("/contact")
  }

  return (
    <section className="ContactUs">
      <h2>Kontaktieren Sie uns!</h2>
      <t>Wir freuen uns auf Ihre Anfrage.</t>
      <div className="ContactUs-Container-Button">
        <Button
          onClick={handleClick}
          className="ContactUs-Button"
          variant="outline-dark"
          size="lg"
          block
        >
          Kontakt
        </Button>
      </div>
    </section>
  )
}
