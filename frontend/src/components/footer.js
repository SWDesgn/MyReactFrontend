import React from "react"

import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

//===============COMPONENT_NAVBAR===============

export default function Footer() {
  return (
    <div className="Footer">
      <FooterComponent />
    </div>
  )
}

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="Footer-Content-Grid">
        <div className="Footer-Content-Grid-Item">
          <CompanySection />
        </div>
        <div className="Footer-Content-Grid-Item">
          <LegalSection />
        </div>
        <div className="Footer-Content-Grid-Item">
          <ContactSection />
        </div>
      </div>
    )
  }
}

function CompanySection() {
  return (
    <>
      <StaticImage
        className="Footer-GridItem-Image"
        src="../images/AW_Icon_100_BB.png"
        alt="AW Logo"
        placeholder="blurred"
        layout="fixed"
        quality={100}
      />
      <Copyright />
    </>
  )
}

function LegalSection() {
  return (
    <>
      <FooterLink label="Impressum&Datenschutz" link="/legals" />
      <FooterLink label="Kontakt" link="/contact" />
    </>
  )
}

function ContactSection() {
  return (
    <>
      <div>
        <a
          className="Footer-Contact-Link"
          href="mailto:kontakt@altergottwebdesign.com"
        >
          kontakt@altergottwebdesign.com
        </a>
      </div>
      <div>
        <a className="Footer-Contact-Link" href="tel:+4915908167673">
          +49 159 0816 7673
        </a>
      </div>
    </>
  )
}

class Copyright extends React.Component {
  render() {
    return (
      <div className="Copyright-Text">
        <t>&copy;2021 Altergott Webdesign</t>
      </div>
    )
  }
}

function FooterLink(props) {
  return (
    <div className="Footer-Link">
      <Link
        className="Footer-Link-Router"
        to={props.link} /*activeClassName=" active"*/
      >
        {props.label}
      </Link>
    </div>
  )
}
