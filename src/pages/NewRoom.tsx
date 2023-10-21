import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import '../styles/auth.scss'
import {Button} from '../components/Button'
import { Link } from "react-router-dom";


// Todo componente deve estar com a letra inicial em maísculo. Toda tag HTML é em minúsculo. Ao colocar maiúsculo na primeira letra,o React entende que é um componente.
export function NewRoom() {
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

                    <h2>Criar uma nova sala</h2>
                     
                    <form>
                        <input type="text" placeholder="Nome da sala" />
                        <Button type="submit">Criar sala</Button>
                    </form>

                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}