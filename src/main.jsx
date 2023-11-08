import React from 'react'
import ReactDOM from 'react-dom'

import { useTelegram } from "../TelegramProvider";

const App = () => {
  const { webApp } = useTelegram()
  {webApp && webApp.expand()}

  return (
    <h1>Привет, мир!</h1>
  );
};

ReactDOM.render(<App />, document.getElementById('app'))
