import SideMenu from "@/components/SideMenu"


const listaExemplo = [
    { nome: "teste01", telefone: "012981656368", dataNasc: "01/01/2000", email: "teste@gmail.com", end: "Rua dos testes", acoes: "ícones aqui" },
    {  nome: "teste02", telefone: "012981656368", dataNasc: "01/01/2000", email: "teste@gmail.com", end: "Rua dos testes", acoes: "ícones aqui" },
    { nome: "teste03", telefone: "012981656368", dataNasc: "01/01/2000", email: "teste@gmail.com", end: "Rua dos testes", acoes: "ícones aqui" },
]

export default function Contacts() {

    return (
        <div className="h-screen w-auto grid grid-cols-7">
            <div>
                <SideMenu />
            </div>
            <div className="col-span-6 bg-[#f5f5f5]">
                <div className="flex justify-between align-center mx-4 mt-4">
                    <h1 className="text-xl font-semibold">Meus Contatos</h1>
                    <button className="p-1 w-[70px] rounded bg-sky-500 text-white">Novo</button>
                </div>
                <div className="mx-4 mt-4">
                    <table className="table-fixed bg-white border-separate border-spacing-0 w-full">
                        <thead>
                            <tr className="border bg-[#fafafa] h-12">
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>Data de nascimento</th>
                                <th>Email</th>
                                <th>Endereço</th>                        
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {listaExemplo.map((val, key) => {
                                return (
                                    <tr key={key}>
                                        <td className="h-12">{val.nome}</td>
                                        <td className="h-12">{val.telefone}</td>
                                        <td className="h-12">{val.dataNasc}</td>
                                        <td className="h-12">{val.email}</td>
                                        <td className="h-12">{val.end}</td>
                                        <td className="h-12">{val.acoes}</td>
                                        
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}