import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { createQR } from '../actions/qrcode_action';

class App extends Component {

  async request(){
    await this.props.createQR();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={this.props.qrcode.value}/>
        <button onClick={this.request.bind(this)}>Request</button>
      </div>
    );
  }
}

const mapStateToProps = ({qrcode}) => {
  return {
    qrcode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createQR : () => dispatch(createQR()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
