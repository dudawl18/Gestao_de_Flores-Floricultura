import { useEffect, useState } from 'react'
import './Materiais.css'
import CardMaterial from './CardMaterial'

function Materiais() {
    const [materiais, setMateriais] = useState([])
    const [inputNome, setInputNome] = useState('')
    const [inputQuantidade, setInputQuantidade] = useState('')
    const [inputUnidade, setInputUnidade] = useState('')

    function cadastrarMaterial() {
        const m = {  // Objeto
            id: Date.now(),  // Ela pega o valor atual de milisegundos desde janeiro de 1970
            nome: inputNome,
            quantidade: Number(inputQuantidade), // Converti em número
            unidade: inputUnidade
        }
         setMateriais([...materiais, m]) 
        
    }

    useEffect(() =>  // Serve para acompanhar um valor e quando ele for alterado a gente usa uma função   
     console.log(materiais)  // quando materiais for alterado o console log é ativado  (palavra-chave: gatilho)
     , [materiais])

    return (
        <div className='materiais-container'>
            <h1>Materiais</h1>
            <div className="formMateriais">
                <h2>Cadastro de Materiais</h2>
            
            <div className="inputContainer">
                <label htmlFor="">Nome</label>
                <input type="text"
                    value={inputNome}
                    onChange={() => setInputNome(event.target.value) } />
            </div>
            <div className="inputContainer">
                <label htmlFor="">Quantidade</label>
                <input type="text" 
                value={inputQuantidade}
                onChange={() => setInputQuantidade(event.target.value) }/>
            </div>
            <div className="inputContainer">
                <label htmlFor="">Unidade</label>
                <input type="text" 
                value={inputUnidade}
                onChange={() => setInputUnidade(event.target.value) }/>
            </div>
                <button onClick={cadastrarMaterial}>Cadastrar</button>
            </div>
            
            <div className="cardsMateriais">
                <h2>Estoque</h2>
                {materiais.map( (m) => (
                    < CardMaterial key={m.id} material={m}/>
                ))}
            </div>

        </div>
    )
}

export default Materiais
