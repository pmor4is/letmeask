// Importação da biblioteca para utilizar rotas no React
// yarn add react-route-dom para adicionar a biblioteca
// yarn add @types/react-route-dom -D para adicionar a tipagem para o TypeScript

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
    // Criação de rotas
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
