import React from "react"
import Carousel from "react-bootstrap/Carousel"

import { StaticImage } from "gatsby-plugin-image"

//===============COMPONENT_PROJECTS===============

export default function Projects() {
  return (
    <section className="Projects">
      <h2>Projekte</h2>
      <div className="Projects-Content">
        <GridProjects />
      </div>
    </section>
  )
}

function GridProjects() {
  function openNaturrepublik() {
    openInNewTab("https://naturrepublik.com")
  }

  function openGasthausLinde() {
    openInNewTab("https://www.gasthauslinde-grosserlach.de/")
  }

  return (
    <div className="Projects-Grid-Container">
      <div className="GridItem">
        <div className="GridItem-Link">
          <a className="GridItem-Link-a" href="https://www.naturrepublik.com">
            <h3>Naturrepublik.com</h3>
          </a>
        </div>
        <StaticImage
          className="CarouselProjects-Image"
          src="../images/naturrepublik.png"
          alt="Naturrepublik.com"
          placeholder="blurred"
          quality={100}
          onClick={openNaturrepublik}
        />
      </div>
      <div className="GridItem">
        <div className="GridItem-Link">
          <a
            className="GridItem-Link-a"
            href="https://www.gasthauslinde-grosserlach.de/"
          >
            <h3>Gasthauslinde-Grosserlach.de</h3>
          </a>
        </div>
        <StaticImage
          className="CarouselProjects-Image"
          src="../images/gasthauslinde.png"
          alt="Gasthauslinde-Grosserlach.de"
          placeholder="blurred"
          quality={100}
          onClick={openGasthausLinde}
        />
      </div>
    </div>
  )
}

function openInNewTab(url) {
  var win = window.open(url, "_blank")
  if (win != null) {
    win.focus()
  }
}

function CarouselProjects() {
  return (
    <Carousel className="CarouselProjects">
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Naturrepublik</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        <span>Naturrepublik.com</span>
        <img
          className="CarouselProjects-Image"
          src="/media/naturrepublik.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/media/naturrepublik.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
