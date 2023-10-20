// Variaveis JavaScript para imagens
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

// Todo componente deve estar com a letra inicial em maísculo. Toda tag HTML é em minúsculo. Ao colocar maiúsculo na primeira letra,o React entende que é um componente.
export function Home() {
    return (
        <div>
        <aside>
            <img src={illustrationImg} alt='Ilustração simbolizando perguntas e respostas'/>
            
            {/* Em HTML, o '&' é utilizado para criar simbolos. Então para utilizar o &, deve escrever &amp; */}
            {/* strong: conteúdo de grande relevância */}
            <strong>Crie salas de Q&amp;A ao vivo</strong>
            <p>Tire as dúvidas da sua audência em tempo real</p>
            <main>
                <div>
                    <img src={logoImg} alt='Let me ask'/>
                    <button>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div>ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder="Digite o código da sala"/>
                        <button type="submit">Entrar na sala</button>
                    </form>
                </div>
            </main>
        </aside>
    </div>
    )
}