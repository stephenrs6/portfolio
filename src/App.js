import React, { Component } from 'react';
// import Mainpage from './components/Mainpage/Mainpage';
import './App.css';
import Header from "./components/Header/Header";
import Contents from "./components/Contents/Contents";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className>
      <Header/>
      <Contents/>
      <Footer/>
    </div>
    );
  }
}

export default App;
