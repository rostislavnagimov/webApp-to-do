import React from 'react'
import ReactDOM from 'react-dom'

import { Container } from "./components/Container";

import './index.css'

const App = () => {
  window.Telegram.WebApp.expand()
  
  return (
    <Container />
  );
};

ReactDOM.render(<App />, document.getElementById('app'))
