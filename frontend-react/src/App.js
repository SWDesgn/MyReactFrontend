import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



import CVPdf from './cv.pdf';

//===============COMPONENTS===============

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

class Header extends React.Component {

  render() {
    return (
      <div className="Header">
        <div className="Header_navbar">
          <div className="Header_navbar_section">
            <AboutButton />
            <ContactButton />
          </div>
          <HomeButton />
          <div className="Header_navbar_section">
            <GithubRedirectButton />
            <FBRedirectButton />
          </div>
        </div>
        <ColoredLine color="white" />
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="Content">
        <h2>under construction</h2>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div className="Content">
        <div>
          <h2>My CV</h2>
          <CV enable={true} />
        </div>
      </div>
    );
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div className="Content">
        <BootstrapForm />
      </div>
    );
  }
}


class Footer extends React.Component {
  render() {
    return (
      <div className="Footer" >
        <ColoredLine color="inherit" />
        <div className="Footer_content">
          <Copyright />
          <Time enable={true} />
        </div>
      </div>
    );
  }
}

class Copyright extends React.Component {
  render() {
    return (
      <div className="Copyright">
        <p>&copy; 2021 Oliver Altergott</p>
      </div>
    );
  }
}

class CV extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loadedWorker: false };
  }

  async componentDidMount() {
    const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');
    pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

    this.setState(state => ({
      loadedWorker: true
    }));
    console.log("loadedWorker");
  }

  render() {
    if (!this.props.enable) {
      return null;
    }

    const isLoadedWorker = this.state.loadedWorker;
    return (
      <div className="CV">
        {isLoadedWorker &&
          <Document className="CV-Doc"
            file={CVPdf} renderMode="canvas" >
            <Page pageNumber={1} renderAnnotationLayer={true} renderTextLayer={false} scale={1.0} renderInteractiveForms={true} />
          </Document>}
      </div>
    );
  }
}


class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => { this.tick() },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    if (!this.props.enable) {
      return null;
    }
    return <div className="Time">
      <h3 className="Time-time">
        Time: {FormattedTime(this.state)}
      </h3>
    </div>;
  }
}

function FormattedTime(props) {
  return props.date.toLocaleTimeString();
}


function AboutButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/about");
  }

  return (
    <NavButton label="Who Dis?" onClick={handleClick} />
  );
}

function ContactButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/contact");
  }

  return (
    <NavButton label="Contact" onClick={handleClick} />
  );
}



function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <NavButton label="Home" onClick={handleClick} />
  );
}

function GithubRedirectButton() {

  function handleClick() {
    console.log("click on github");
    openInNewTab("https://github.com/SWDesgn");
  }

  return (
    <NavButton label="Github" onClick={handleClick} />
  );
}

function FBRedirectButton() {

  function handleClick() {
    console.log("click on fb");
    openInNewTab("https://www.facebook.com/oliver.altergott");
  }

  return (
    <NavButton label="Facebook" onClick={handleClick} />
  );
}


class BootstrapForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      error: false,
      success: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onError = this.onError.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log("input change: " + name + ", " + value);
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.preventDefault();

    const templateId = 'template_w8w6iyl';

    this.sendFeedback(templateId, { from_name: this.state.email, message: this.state.message })
  }


  sendFeedback(templateId, variables) {
    emailjs.init("user_mxFnMNeyq8URTGYUHrqZ0");
    emailjs.send('service_xydmsph', templateId,
      variables
    ).then(res => {
      //alert('Your message is sent!');
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return { success: true }
      });
      return;
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(this.onError)


  }

  onError() {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return { error: true }
    });
  }

  render() {

    if (this.state.error) {
      return (
        <div className="ContactForm">
          <div className="ContactForm-Content">
            <h3>Error!</h3>
          </div>
        </div>
      );
    }

    if (this.state.success) {
      return (
        <div className="ContactForm">
          <div className="ContactForm-Content">
            <h3>Your message has been sent!</h3>
          </div>
        </div>
      );
    }

    return (
      <div className="ContactForm">
        <div className="ContactForm-Content">
          <h2>Contact me!</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label column="lg">Your Email</Form.Label>
              <Form.Control name="email" required size="lg" type="email" placeholder="name@example.com" onChange={this.handleInputChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label column="lg" >Your Message</Form.Label>
              <Form.Control name="message" required size="lg" as="textarea" rows={4} placeholder="Type your text here" onChange={this.handleInputChange} />
            </Form.Group>
            <Button variant="outline-dark" size="lg" type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}


const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 4,
      border: 0,
      margin: 4
    }}
  />
);

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  if (win != null) {
    win.focus();
  }
}


class NavButton extends React.Component {
  render() {
    if (this.props.active) {
      return <div className="NavButton">
        <button className="NavButton-On" onClick={this.props.onClick} >
          {this.props.label}
        </button>
      </div>;
    } else {
      return <div className="NavButton">
        <button className="NavButton-Off" onClick={this.props.onClick} >
          {this.props.label}
        </button>
      </div>;
    }
  }
}





