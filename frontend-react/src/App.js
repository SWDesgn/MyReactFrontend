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


import './index.css';

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
          <div class="Header_navbar_section">
            <AboutButton />
            <ContactButton />
          </div>
          <HomeButton />
          <div class="Header_navbar_section">
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
      <div>
        <h2>under construction</h2>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>My CV</h2>
        <div className="Content">
          <CV enable={true} />
        </div>
      </div>
    );
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2>under construction</h2>
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
            <Page pageNumber={1} renderAnnotationLayer="false" renderTextLayer="false" scale="1.2" renderInteractiveForms="false" />
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
    <Button label="Who Dis?" onClick={handleClick} />
  );
}

function ContactButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/contact");
  }

  return (
    <Button label="Contact" onClick={handleClick} />
  );
}



function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <Button label="Home" onClick={handleClick} />
  );
}

function GithubRedirectButton() {

  function handleClick() {
    console.log("click on github");
    openInNewTab("https://github.com/SWDesgn");
  }

  return (
    <Button label="Github" onClick={handleClick} />
  );
}

function FBRedirectButton() {

  function handleClick() {
    console.log("click on fb");
    openInNewTab("https://www.facebook.com/oliver.altergott");
  }

  return (
    <Button label="Facebook" onClick={handleClick} />
  );
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


class Button extends React.Component {
  render() {
    if (this.props.active) {
      return <div className="Button">
        <button className="Button-On" onClick={this.props.onClick} >
          {this.props.label}
        </button>
      </div>;
    } else {
      return <div className="Button">
        <button className="Button-Off" onClick={this.props.onClick} >
          {this.props.label}
        </button>
      </div>;
    }
  }
}





