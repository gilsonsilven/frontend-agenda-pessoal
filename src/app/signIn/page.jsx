'use client'

import { useState } from "react";
import SignInSignUpImage from "@/components/SignInSignUpImage";
import Link from "next/link";

export default function SignIn() {

    return (
        <div className="grid grid-cols-3 h-full w-full">
            <div className="flex flex-col justify-center ml-48 items-center h-screen w-auto">
                <div className="h-auto">
                    <div>
                        <h2 className="text-3xl font-semibold mb-3">Acesse sua conta</h2>
                    </div>
                    
                    <div>
                        <input id="email" type="text" placeholder="Email" className="border w-[300px] placeholder:text-black placeholder:opacity-60 border-[#444547] rounded pl-3 py-2 border-opacity-30 hover:border-gray-700 my-2.5"></input>
                    </div>
                    <div>
                        <input  id="password" type="text" placeholder="Senha" className="border w-[300px] placeholder:text-black placeholder:opacity-60 border-[#444547] rounded pl-3 py-2 border-opacity-30 hover:border-gray-700 my-2.5"></input>
                    </div>
                </div>
                <div>
                    <button className="font-semibold mt-4 mb-2 w-[300px] h-[36px] rounded bg-sky-500 text-white">Entrar</button>
                </div>
                <div className="mb-20">
                    <p>Não possui uma conta? <Link href={'/signUp'}>Cadastre-se</Link></p>
                </div>
            </div>
            <div className="col-span-2 h-dvh w-auto mr-1 ml-64">
                <SignInSignUpImage />
            </div>
        </div>
    )
}