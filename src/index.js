import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import PoliProfile from './components/PoliProfile';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Switch>
        <Route path="/poliprofile" component={PoliProfile} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
