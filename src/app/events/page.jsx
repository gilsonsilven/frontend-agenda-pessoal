import SideMenu from "@/components/SideMenu"

const listaExemplo = [
    {titulo: "teste01", data: "20/11/2024", horaInicio: "12:00", horaFim: "16:00", end: "Rua dos testes", contatos: "opcional", desc: "descrição", acoes: "ícones aqui" },
    {titulo: "teste01", data: "20/11/2024", horaInicio: "12:00", horaFim: "16:00", end: "Rua dos testes", contatos: "opcional", desc: "descrição", acoes: "ícones aqui" },
    {titulo: "teste01", data: "20/11/2024", horaInicio: "12:00", horaFim: "16:00", end: "Rua dos testes", contatos: "opcional", desc: "descrição", acoes: "ícones aqui" },
    {titulo: "teste01", data: "20/11/2024", horaInicio: "12:00", horaFim: "16:00", end: "Rua dos testes", contatos: "opcional", desc: "descrição", acoes: "ícones aqui" },
    {titulo: "teste01", data: "20/11/2024", horaInicio: "12:00", horaFim: "16:00", end: "Rua dos testes", contatos: "opcional", desc: "descrição fui no parte com antônio e maria caçar passarinhos mas estava chovendo e ficamos molhados", acoes: "ícones aqui" },
]

export default function Events() {

    return (
        <div className="h-screen w-auto grid grid-cols-7">
            <div>
                <SideMenu />
            </div>
            <div className="col-span-6 bg-[#f5f5f5]">
                <div className="flex justify-between align-center mx-4 mt-4">
                    <h1 className="text-xl font-semibold">Meus Eventos</h1>
                    <button className="p-1 w-[70px] rounded bg-sky-500 text-white">Novo</button>
                </div>
                <div className="mx-4 mt-4">
                    <table className="table-fixed bg-white border-separate border-spacing-0 w-full">
                        <thead>
                            <tr className="border bg-[#fafafa] h-12">
                                <th>Título</th>
                                <th>Data</th>
                                <th>Início</th>
                                <th>Término</th>
                                <th>Endereço</th>                        
                                <th>Contatos part</th>
                                <th>Descrição</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {listaExemplo.map((val, key) => {
                                return (
                                    <tr key={key}>
                                        <td className="h-12">{val.titulo}</td>
                                        <td className="h-12">{val.data}</td>
                                        <td className="h-12">{val.horaInicio}</td>
                                        <td className="h-12">{val.horaFim}</td>
                                        <td className="h-12">{val.end}</td>
                                        <td className="h-12">{val.contatos}</td>
                                        <td className="h-12">{val.desc}</td>
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