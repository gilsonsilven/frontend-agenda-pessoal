'use client'

import { useState, useTransition } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/pt-br';
import SignInSignUpImage from "@/components/signInSignUpImage";




export default function SignUp() {

    const [name, setName] = useState('')
    const [emailprim, setEmailprim] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [birth_date, setBirth_date] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')


    const handleSubmit = async () => {
        const response = await fetch('http://localhost:3300/user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, emailprim, password, birth_date, address, phone })
        })

    }

    const dateChange = (datepickerDate) => {
        setBirth_date(datepickerDate)
    }

    return (
        <div className="grid grid-cols-3 h-full w-full">
            <div className="flex flex-col justify-center ml-48 items-center h-screen w-auto">
                <div className="h-auto">
                    <div>
                        <h2 className="text-3xl font-semibold mb-3">Crie sua conta</h2>
                    </div>
                    
                    <div>
                        <input onChange={e => setName(e.target.value)} id="name" type="text" placeholder="Nome" className="border w-[300px] placeholder:text-black placeholder:opacity-60 border-[#444547] rounded pl-3 py-2 border-opacity-30 hover:border-gray-700 my-2.5"></input>
                    </div>
                    <div>
                        <input onChange={e => setEmailprim(e.target.value)} id="email" type="text" placeholder="Email" className="border w-[300px] placeholder:text-black placeholder:opacity-60 border-[#444547] rounded pl-3 py-2 border-opacity-30 hover:border-gray-700 my-2.5"></input>
                    </div>
                    <div>
                        <input onChange={e => setPassword(e.target.value)} id="password" type="text" placeholder="Senha" className="border w-[300px] placeholder:text-black placeholder:opacity-60 border-[#444547] rounded pl-3 py-2 border-opacity-30 hover:border-gray-700 my-2.5"></input>
                    </div>
                    <div>
                        <input onChange={e => setConfPassword(e.target.value)} id="confPassword" type="text" placeholder="Confirmar Senha" className="border w-[300px] placeholder:text-black placeholder:opacity-60 border-[#444547] rounded pl-3 py-2 border-opacity-30 hover:border-gray-700 my-2.5"></input>
                    </div>
                    <div className="my-2.5">
                        <LocalizationProvider adapterLocale="pt-br" dateAdapter={AdapterDayjs}>
                            <DatePicker className="w-[300px]" fullWidth onChange={dateChange} label="Data de nascimento" name="StartDate" slotProps={{ textField: 
                                {
                                    size: 'small'
                                }

                            }} />
                        </LocalizationProvider>
                    </div>
                    <div id="phone">
                        <input onChange={e => setPhone(e.target.value)} id="phone" type="text" placeholder="Telefone" className="border w-[300px] placeholder:text-black placeholder:opacity-60 border-[#444547] rounded pl-3 py-2 border-opacity-30 hover:border-gray-700 my-2.5"></input>
                    </div>
                    <div id="endereço">
                        <input onChange={e => setAddress(e.target.value)} id="address" type="text" placeholder="Endereço" className="border w-[300px] placeholder:text-black placeholder:opacity-60 border-[#444547] rounded pl-3 py-2 border-opacity-30 hover:border-gray-700 my-2.5"></input>
                    </div>

                </div>
                <div>
                    <button onClick={handleSubmit} className="font-semibold mt-4 mb-2 w-[300px] h-[36px] rounded bg-sky-500 text-white">Cadastre-se</button>
                </div>
                <div>
                    <p>Já possui uma conta? <a>Fazer Login</a></p>
                </div>
            </div>
            <div className="col-span-2 h-dvh w-auto mr-1 ml-64">
                <SignInSignUpImage />
            </div>
        </div>
    )
}