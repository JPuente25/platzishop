import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './routes/index';
import { Provider } from './context/context';
import { GlobalStyle } from './styles/GlobalStyle';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('hola')

root.render(
   <Provider>
      <GlobalStyle />
      <App />
   </Provider>
);

