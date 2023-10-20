//Importação de uma tipagem do TypeScript que declara quais são todos os atributos que um botão pode receber. Da para visualizar quais são clicando com CTRL
import { ButtonHTMLAttributes } from "react"

import '../styles/button.scss';

// ButtonProps: propriedades referentes ao componente. <Nome-do-componente>Props é a nomemclatura padrão
// O botão ira receber as propriedades ButtonHTMLAttributes<HTMLButtonElement> (Deve ser passado esse elemento após o ButtonHTMLAttributes)
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
    return (
        // {...props}: Passa todas as propriedades do componente de uma vez só
        <button className="button" {...props}/>

    )

}