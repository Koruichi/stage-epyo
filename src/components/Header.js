import React, {} from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import './styles/Header.scss';
import './styles/Print.scss'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
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
  logout() {
    localStorage.clear();
    window.location.href = '/';
  }
  render() {
    return (
      <div id="bandeau">
        <a className="deconnexion" href="#" onClick={() => this.logout()}>Déconnexion</a>
        <div id="time"> {this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}

ReactDom.render(
  <Clock />,
  document.getElementById('root')
);

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Clock);