import React from 'react';
import ReactDOM from 'react-dom';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';

import './index.css';

import CVPdf from './cv.pdf';

//===============COMPONENTS===============

function App() {
  return (
    <div className="App">
      <Content />
      <Footer />
    </div>
  );
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
      </div >
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
            <Page pageNumber={1} renderAnnotationLayer="false" renderTextLayer="false" height="1200" renderInteractiveForms="false" />
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


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleWhoDisClick = this.handleWhoDisClick.bind(this);
    this.handleGithubClick = this.handleGithubClick.bind(this);
    this.handleFBClick = this.handleFBClick.bind(this);
    this.state = { isWhoDis: false };
  }

  handleWhoDisClick() {
    this.setState(state => ({
      isWhoDis: !state.isWhoDis
    }));
    console.log("click on whodis");
  }

  handleGithubClick() {
    console.log("click on github");
    openInNewTab("https://github.com/SWDesgn");
  }

  handleFBClick() {
    console.log("click on fb");
    openInNewTab("https://www.facebook.com/oliver.altergott");
  }

  render() {
    return (
      <div className="Content">
        <div className="Header">
          <div class="Header_section">
            <Button label="Who Dis?" onClick={this.handleWhoDisClick} active={this.state.isWhoDis} />
            <Button label="Contact me!" />
          </div>
          <div class="Header_section">
            <Button label="Github" onClick={this.handleGithubClick} active={false} />
            <Button label="Facebook" onClick={this.handleFBClick} active={false} />
          </div>
        </div>
        <ColoredLine color="white" />
        <CV enable={this.state.isWhoDis} />
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


//===============RENDERING===============

ReactDOM.render(
  <App />,
  document.getElementById('root')
);




