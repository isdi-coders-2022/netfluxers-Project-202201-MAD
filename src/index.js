import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { ContextProvider } from './components/contexto/context-provider';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-k3d5mu84.us.auth0.com"
      clientId="axYPlmkCW9QGzoEICBx3u6dAR7tRWewU"
      redirectUri={window.location.origin}
    >
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
