import {useState} from "react";

function CondicionalComponent(){
    const [show,setShow] = useState(false);

    return (
        <div>
            <button onClick ={() => setShow(!show)}>
                {show ? "Esconder" : "Mostrar"} Mensagem
            </button>

            { show && <p>Esta é uma mensagem condicional!</p> }
        </div>
    )
}

export default CondicionalComponent;