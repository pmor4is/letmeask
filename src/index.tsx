import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importação de serviços do Firebase
import './services/firebase';
// Importação do estilo global da aplicação. Ele altera qualquer componente dentro da aplicação
// .scss: extensão da biblioteca node-sass. Sass é um pré-processador css
import './styles/global.scss';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
