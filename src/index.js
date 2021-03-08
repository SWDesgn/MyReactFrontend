import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//===============COMPONENTS===============

function App() {
  return (
    <div>
      <TabControl />
      <Time />
    </div>
  );
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


class TabControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleWhoDisClick = this.handleWhoDisClick.bind(this);
    this.handleProjectsClick = this.handleProjectsClick.bind(this);
    this.state = { isWhoDis: false, isProjects: false };
  }

  handleWhoDisClick() {
    this.setState(state => ({
      isWhoDis: !state.isWhoDis
    }));
    console.log("click on whodis");
  }

  handleProjectsClick() {
    this.setState(state => ({
      isProjects: !state.isProjects
    }));
    console.log("click on projects");
  }

  render() {
    return (
      <div className="Tab">
        <Button label="Who Dis?" onClick={this.handleWhoDisClick} />
        <Button label="Projects" onClick={this.handleProjectsClick} />
        <Button label="Blog" />
      </div>
    );
  }
}


class Button extends React.Component {
  render() {
    return <div className="Button">
      <button className="Button-button" onClick={this.props.onClick}>
        {this.props.label}
      </button>
    </div>;
  }
}


//===============RENDERING===============

ReactDOM.render(
  <App />,
  document.getElementById('root')
);




