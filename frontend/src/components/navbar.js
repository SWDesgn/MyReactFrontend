import React from "react"
import { Link } from "gatsby"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

//===============COMPONENT_NAVBAR===============

export default function MenuNavbar() {
  return (
    <div className="MenuNavbar">
      <BootstrapNavbar />
    </div>
  )
}

class BootstrapNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this)
    this.setNavExpanded = this.setNavExpanded.bind(this)
    this.closeNavBar = this.closeNavBar.bind(this)
    this.state = {
      navExpanded: false,
    }
  }

  componentDidMount() {
    var self = this
    this.closeNav = function () {
      console.log("closeNav")
      self.setState({ navExpanded: false })
    }
  }

  setNavExpanded(expanded) {
    this.setState({ navExpanded: expanded })
  }

  closeNavBar() {
    console.log("closeNav")
    this.setState({ navExpanded: false })
  }

  scrollToTop() { }

  componentWillUnmount() { }

  render() {
    return (
      <div className="BootstrapNavbar">
        <Navbar
          className="BootstrapNavbar-Navbar"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
          onToggle={this.setNavExpanded}
          expanded={this.state.navExpanded}
        >
          <Nav className="Navbar-Item-Brand-center">
            <Navbar.Brand
              className="Navbar-Item-Brand-center-brand"
              href="/#mission"
            >
              Altergott Webdesign
            </Navbar.Brand>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link
                className="Navbar_HashLink"
                activeClass="active"
                to="/#projects"
                /*activeClassName="active"*/ onClick={this.closeNavBar}
              >
                Projekte
              </Link>
              <Link
                className="Navbar_HashLink"
                activeClass="active"
                to="/#services"
                /*activeClassName="active"*/ onClick={this.closeNavBar}
              >
                Services
              </Link>
              <Link
                className="Navbar_HashLink"
                activeClass="active"
                to="/#process"
                /*activeClassName="active"*/ onClick={this.closeNavBar}
              >
                Prozess
              </Link>
            </Nav>
            <Nav>
              <Link
                className="Navbar_HashLink"
                to="/about"
                /*activeClassName="active"*/ onClick={this.closeNavBar}
              >
                Über uns
              </Link>
              <Link
                className="Navbar_HashLink"
                to="/contact"
                /*activeClassName="active"*/ onClick={this.closeNavBar}
              >
                Kontakt
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
