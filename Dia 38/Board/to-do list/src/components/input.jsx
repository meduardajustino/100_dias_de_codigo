import React from "react"
import { useState } from "react"

const Input = () => {
    const [input, setInput] = useState("");
    
    console.log(input);
    
    return (
        <>
            <form>
                <input type="text"
                    className="border rounded 2px"
                    placeholder="Adicione uma tarefa"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}/>
                <button>Adicionar Tarefa</button>
            </form>
        </>
    )
}

export default Input