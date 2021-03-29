import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import "../components/layout.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
//===============COMPONENT_ABOUT===============

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <About />
  </Layout>
)

export default AboutPage

function About() {
  return (
    <section className="About">
      <h2>Über Uns</h2>
      <h3 className="About-Philosophy">
        <q>Kundenzufriedenheit ist unser höchstes Ziel.</q>
      </h3>
      <div className="About-Team">
        <div>
          <div className="About-Grid-Container">
            <AboutGridItemTextNiko />
            <AboutGridItemPictureNiko />
          </div>
        </div>
        <div>
          <div className="About-Grid-Container">
            <AboutGridItemTextOli />
            <AboutGridItemPictureOli />
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutGridItemOli() {
  return (
    <div className="About-GridItem">
      <img className="About-GridItem-Image" src="/media/oliver.jpg" alt="" />
      <div className="About-GridItem-Text">
        <li className="About-GridItem-HeadingName">Oliver Altergott</li>
        <li>Role</li>
        <li className="About-GridItem-Quote">"My awesome quote"</li>
      </div>
    </div>
  )
}

function AboutGridItemPictureOli() {
  return (
    <div className="About-GridItem-Pic">
      <StaticImage
        className="About-GridItem-Image"
        src="../images/oliver.jpg"
        alt="Oliver Portrait"
        placeholder="blurred"
        layout="fixed"
        width={220}
        height={220}
        quality={100}
        transformOptions={{
          fit: "cover",
          cropFocus: "attention",
        }}
      />
    </div>
  )
}
function AboutGridItemPictureNiko() {
  return (
    <div className="About-GridItem-Pic">
      <StaticImage
        className="About-GridItem-Image"
        src="../images/nikolai.jpg"
        alt="Nikolai Portrait"
        placeholder="blurred"
        layout="fixed"
        width={220}
        height={220}
        quality={100}
        transformOptions={{
          fit: "cover",
          cropFocus: "top",
        }}
      />
    </div>
  )
}
function AboutGridItemTextOli() {
  return (
    <div className="About-GridItem-Text">
      <h3 className="About-GridItem-HeadingName">Oliver Altergott</h3>
      <li>Gründer</li>
      <li>Frontend-Entwickler</li>
      <li>B.Sc. Elektro-Informationstechnik</li>
      {/*<li className="About-GridItem-Quote">"My awesome quote"</li>*/}
    </div>
  )
}
function AboutGridItemTextNiko() {
  return (
    <div className="About-GridItem-Text">
      <h3 className="About-GridItem-HeadingName">Nikolai Altergott</h3>
      <li>Gründer</li>
      <li>Chief Design & UX</li>
      {/*<li className="About-GridItem-Quote">"My awesome quote"</li>*/}
    </div>
  )
}
