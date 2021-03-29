import React from "react"
import emailjs from "emailjs-com"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import Layout from "../components/layout"
import SEO from "../components/seo"

//===============COMPONENTS_CONTACT===============

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Contact />
  </Layout>
)

export default ContactPage

function Contact() {
  return (
    <section className="Contact">
      <h2>Nehmen Sie Kontakt mit uns auf</h2>
      <div className="Contact-Grid">
        <div className="Contact-Form">
          <BootstrapForm />
        </div>
        <div className="Contact-Info">
          <h3>
            <b>Tel.:</b> 015908167673
          </h3>
          <br></br>
          <h3>
            <b>E-Mail: </b>kontakt@altergottwebdesign.com
          </h3>
          <br></br>
          <h3 className="bold">Anschrift:</h3>
          <h3>
            Altergott Webdesign<br></br>Lange Äcker 1<br></br>71543 Wüstenrot
            <br></br>Deutschland
          </h3>
        </div>
      </div>
    </section>
  )
}

class BootstrapForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      tel: "",
      message: "",
      error: false,
      success: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onError = this.onError.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })

    console.log("input change: " + name + ", " + value)
  }

  handleSubmit(event) {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    event.preventDefault()

    const templateId = "template_w8w6iyl"

    this.sendFeedback(templateId, {
      from_name: this.state.email,
      tel: this.state.tel,
      message: this.state.message,
    })
  }

  sendFeedback(templateId, variables) {
    emailjs.init("user_mxFnMNeyq8URTGYUHrqZ0")
    emailjs
      .send("service_xydmsph", templateId, variables)
      .then(res => {
        //alert('Your message is sent!');
        this.setState(state => {
          // Important: read `state` instead of `this.state` when updating.
          return { success: true }
        })
        return
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(this.onError)
  }

  onError() {
    this.setState(state => {
      // Important: read `state` instead of `this.state` when updating.
      return { error: true }
    })
  }

  render() {
    if (this.state.error) {
      return (
        <div className="ContactForm">
          <div className="ContactForm-Content">
            <h3>
              Es ist ein Fehler aufgetreten, bitte versuchen Sie es nochmal.
            </h3>
          </div>
        </div>
      )
    }

    if (this.state.success) {
      return (
        <div className="ContactForm">
          <div className="ContactForm-Content">
            <h3>Vielen Dank für Ihre Nachricht!</h3>
          </div>
        </div>
      )
    }

    return (
      <div className="Contact-Form-Wrapper">
        <Form className="Contact-Form-Content" onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="Label">
              <h3 className="bold">Meine E-Mail</h3>
            </Form.Label>
            <Form.Control
              className="input-text"
              name="email"
              required
              size="lg"
              type="email"
              placeholder="name@beispiel.com"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="Label">
              <h3 className="bold">Meine Telefonnummer</h3>
            </Form.Label>
            <Form.Control
              className="input-text"
              name="tel"
              required
              size="lg"
              type="tel"
              placeholder="+49 1234 5678901"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <h3 className="bold">Meine Anfrage:</h3>
            </Form.Label>
            <Form.Control
              className="input-text"
              name="message"
              required
              size="lg"
              as="textarea"
              rows={4}
              placeholder="Wir antworten blitzschnell"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button
            variant="outline-dark"
            size="lg"
            type="submit"
            className="Submit-Button"
          >
            Abschicken
          </Button>
        </Form>
      </div>
    )
  }
}
