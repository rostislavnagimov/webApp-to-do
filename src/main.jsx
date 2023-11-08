import React from 'react'
import ReactDOM from 'react-dom'

import { useTelegram } from "../TelegramProvider";
import { Container } from "./components/Container";

import './index.css'

const App = () => {
  const { webApp } = useTelegram()
  webApp && webApp.expand()

  return (
    <Container />
  );
};

ReactDOM.render(<App />, document.getElementById('app'))
