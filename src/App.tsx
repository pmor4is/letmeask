// Importação da biblioteca para utilizar rotas no React
// yarn add react-route-dom para adicionar a biblioteca
// yarn add @types/react-route-dom -D para adicionar a tipagem para o TypeScript
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Contextos: forma de compartilhar informação entre dois ou mais componentes
import { createContext, useState } from 'react'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { auth,firebase } from './services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  // User pode ser usuario ou undefined porque ele não está logado
  user: User | undefined,
  signInWithGoogle: () => void,
}

export const AuthContext = createContext({} as AuthContextType);

function App() {
  const [user, setUser] = useState<User>();

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

        // signInWithPopup: abre um pop-up para logar no Google
        auth.signInWithPopup(provider).then(result => {
            if (result.user) {
              const { displayName, photoURL, uid} = result.user;

              if (!displayName || !photoURL) {
                throw new Error('Missing information from Google account');
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
              })
            }
        })
      }
      
      return (
        // Criação de rotas
        <BrowserRouter>
          {/* Compartilha o contexto entre todas as rotas */}
          {/* Duas chaves: a primeira que quer um código JavaScript dentro, e a segunda é para ser um objeto */}
          {/* Compartilha o contexto para todas as páginas terem a informação do login, pois tem mais que uma página que tem o link para login */}
          <AuthContext.Provider value={{user, signInWithGoogle}}/>
    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms/new" element={<NewRoom />} />
          </Routes>
        </BrowserRouter>
      );
  }
  


export default App;
