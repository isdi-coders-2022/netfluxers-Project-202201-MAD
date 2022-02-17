import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { ContextProvider } from './components/contexto/context-provider';

ReactDOM.render(
  <Auth0Provider
    domain="dev-2o0hs-n4.us.auth0.com"
    clientId="dXJFsAhjpTOe1N5rwsof6tgyBGgXVEcu"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
