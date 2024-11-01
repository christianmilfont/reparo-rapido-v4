"use client"
import { TipoCarro } from "@/app/types"; // Certifique-se de definir o tipo TipoCarro
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CadastroCarro() {
    const navigate = useRouter()

    const [carro, setCarro] = useState<TipoCarro>({
        id: 0,
        modelo: '',
        ano: 0,
        usuario: {
            nome: '',
            email: '',
            telefone: '',
        },
    })

    // Função para armazenar os dados digitados pelo usuário no obj carro
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCarro({ ...carro, [name]: value })
    }

    const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCarro({ ...carro, usuario: { ...carro.usuario, [name]: value } })
    }

    // Função para enviar os dados atualizados para a API
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const cabecalho = {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(carro)
            }

            const response = await fetch(`http://localhost:3000/api/cadastro-carro`, cabecalho) // Ajuste o endpoint conforme necessário
            if (response.ok) {
                alert('Carro cadastrado com sucesso!')
                setCarro({ id: 0, modelo: '', ano: 0, usuario: { nome: '', email: '', telefone: '' } })
                navigate.push('/servicos') // Redireciona para a página de serviços
            } else {
                alert('Erro ao cadastrar carro!')
            }
        } catch (error) {
            console.error("Erro ao cadastrar o carro", error);
        }
    }

    return (
        <main className="grow">
            <h2 className="text-3xl text-center text-[#4a90e2] mb-4">Cadastro de Carro</h2>

            <form className="w-1/3 m-auto p-2 border border-[#4a90e2] rounded-md" onSubmit={handleSubmit}>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idmodelo">Modelo do Carro</label>
                    <input
                        className="border border-gray-300 p-1 rounded-md focus:border-[#4a90e2] focus:ring focus:ring-[#4a90e2]/50"
                        type="text"
                        name="modelo"
                        value={carro.modelo}
                        id='idmodelo'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idano">Ano do Carro</label>
                    <input
                        className="border border-gray-300 p-1 rounded-md focus:border-[#4a90e2] focus:ring focus:ring-[#4a90e2]/50"
                        type="number"
                        name="ano"
                        value={carro.ano}
                        id="idano"
                        onChange={handleChange}
                        required
                    />
                </div>
                <h3 className="text-xl text-center text-[#4a90e2] mb-2">Dados do Usuário</h3>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idnome">Nome</label>
                    <input
                        className="border border-gray-300 p-1 rounded-md focus:border-[#4a90e2] focus:ring focus:ring-[#4a90e2]/50"
                        type="text"
                        name="nome"
                        value={carro.usuario.nome}
                        id="idnome"
                        onChange={handleUserChange}
                        required
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idemail">Email</label>
                    <input
                        className="border border-gray-300 p-1 rounded-md focus:border-[#4a90e2] focus:ring focus:ring-[#4a90e2]/50"
                        type="email"
                        name="email"
                        value={carro.usuario.email}
                        id="idemail"
                        onChange={handleUserChange}
                        required
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idtelefone">Telefone</label>
                    <input
                        className="border border-gray-300 p-1 rounded-md focus:border-[#4a90e2] focus:ring focus:ring-[#4a90e2]/50"
                        type="tel"
                        name="telefone"
                        value={carro.usuario.telefone}
                        id="idtelefone"
                        onChange={handleUserChange}
                        required
                    />
                </div>
                <button className="bg-[#4a90e2] text-white text-xl p-2 block ms-auto me-2 rounded-md hover:bg-[#3b7bbf] transition-all duration-300" type="submit">Cadastrar Carro</button>
            </form>
        </main>
    )
}
