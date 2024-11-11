'use client'

import { useState } from "react"


export default function SignUp() {

    const [name, setName] = useState('')
    const [emailprim, setEmailprim] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const response = await fetch('http://localhost:3300/user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, emailprim, password})
        })

    }

    return (
        <>
            <div className="h-auto w-auto">
                <div>
                    <h2>Cadastro</h2>
                </div>
                
                <div>
                    <input onChange={e => setName(e.target.value)} id="name" type="text" placeholder="Nome" className=""></input>
                </div>
                <div>
                    <input onChange={e => setEmailprim(e.target.value)} id="email" type="text" placeholder="Email" className=""></input>
                </div>
                <div>
                    <input onChange={e => setPassword(e.target.value)} id="password" type="text" placeholder="Senha" className=""></input>
                </div>
                <div>
                    <input id="confirmPassword" type="text" placeholder="Confirmar senha" className=""></input>
                </div>
                <div>
                    <input id="birthDate" type="text" placeholder="Data nascimento - arrumar depois" className=""></input>
                </div>
                <div id="phone">
                    <input id="phone" type="text" placeholder="Telefone" className=""></input>
                </div>
                <div id="endereço">
                    <input id="address" type="text" placeholder="Endereço" className=""></input>
                </div>

            </div>
            <div>
                <button onClick={handleSubmit} className="bg-teal-400 text-white">Cadastrar</button>
            </div>
        </>
    )
}