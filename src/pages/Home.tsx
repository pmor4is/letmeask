// Variaveis JavaScript para imagens
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import {Button} from '../components/Button'
import { useNavigate } from 'react-router-dom'

// Todo componente deve estar com a letra inicial em maísculo. Toda tag HTML é em minúsculo. Ao colocar maiúsculo na primeira letra,o React entende que é um componente.
export function Home() {
    //Toda função que começa com use, é chamada de Hook e ele deve estar dentro do componente.
    const navigate = useNavigate();

    function navigateToNewRoom() {
        navigate('/rooms/new');
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt='Ilustração simbolizando perguntas e respostas' />
                {/* Em HTML, o '&' é utilizado para criar simbolos. Então para utilizar o &, deve escrever &amp; */}
                {/* strong: conteúdo de grande relevância */}
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas da sua audência em tempo real</p>
            </aside>

            <main>
                <div className='main-content'>
                    <img src={logoImg} alt='Let me ask' />

                    <button className='create-room' onClick={navigateToNewRoom}>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    
                    <div className='separator'>ou entre em uma sala</div>
                    
                    <form>
                        <input type="text" placeholder="Digite o código da sala" />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}