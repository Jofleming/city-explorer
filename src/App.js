import { Component } from 'react';
// import Header from './components/Header.js';
import Main from './components/Main.js';
// import Footer from './components/Footer.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}
