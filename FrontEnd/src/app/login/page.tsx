    'use client'

    import { useState } from "react"
    import { useRouter } from "next/navigation";
    
   
    export default function Login(){
        const router = useRouter();     
        const [email, setEmail] = useState<string>("");
        const [password, setPassword] = useState<string>("");
  
        const handleLogin = async () =>{
            
            try{
                const resp = await fetch("http://localhost:8080/usuario/login" , {
                    method: "POST",
                    headers:{
                        'Content-Type' : 'application/json'
                    },
                    body:JSON.stringify({email,password})            
                });

                const data = await resp.text();
                if(resp.ok){
                    alert("Login bem-sucedido!")
                    router.push("/main")
                }else{
                    alert(`Erro: ${data}` )
                } 
            }
                catch (erro) {
                    console.error("Erro ao tentar fazer login:", erro);
                    alert("Erro ao conectar com o servidor.");
                }
        
    }
    
        return(
            <div className="card_login">
                <div className="container_card_login">
                    <div>
                        <input 
                        type="email" 
                        value={email}
                        placeholder="CPF OU E-MAIL"
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input 
                        type="password" 
                        placeholder="Password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button onClick={handleLogin}>
                    Entrar
                    </button>
                </div>  
            </div>
        )
    }