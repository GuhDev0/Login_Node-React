"use client"

import { useState } from "react"
 import Input from "./card_input/page";


export default function Cadastro() {
      
    const [nome, setNome] = useState<string>("");
    const [sobrenome, setSobrenome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleCadastro = () =>{

        try{
            fetch("http://localhost:8080/usuario/usuarios" , {
                method: "POST",
                headers:{
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify({nome,sobrenome,email,password})
                
            
            })
            .then(response => response.text())
            .then(data =>{
                alert("Resposta do back: " + data)   
            })
            .catch(error =>{
                alert(error)
            })

           
           
        }catch(erro){
            console.error("erro: " + erro)
        }
        
        
    }

    return (
        <div className="card_cadastro">
            <div className="container_card_cadastro">
            <Input
            type = "text"
            value={nome}
            placeholder="Digite Seu nome"
            onChange={(e) => setNome(e.target.value)}
            />
            <Input
            type = "text"
            value={sobrenome}
            placeholder="Digite Seu sobrenome"
            onChange={(e) => setSobrenome(e.target.value)}
            /><Input
            type = "text"
            value={email}
            placeholder="Digite Seu email"
            onChange={(e) => setEmail(e.target.value)}
            /><Input
            type = "password"
            value={password}
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button onClick={handleCadastro}>
                Cadastrar
            </button>
        </div>
    )
}