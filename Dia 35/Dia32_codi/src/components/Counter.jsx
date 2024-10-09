import { useState } from "react";
import './contador.css';

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count => count + 1);
    }

    function decrement() {
        setCount(count => count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="contador-container">
            <h1 className="contador-titulo">Contador: <span className="contador-valor">{count}</span></h1>
            <button className="contador-botao" onClick={increment}>Incrementar</button>
            <button className="contador-botao" onClick={decrement}>Decrementar</button>
            <button className="contador-botao" onClick={reset}>Resetar</button>
        </div>
    );
}

export default Counter;
