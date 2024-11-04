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
        e.preventDefault();
    
        try {
            const cabecalho = {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(carro)
            };
    
            const response = await fetch(`http://localhost:3000/api/base-produtos`, cabecalho);
    
            if (!response.ok) {
                const data = await response.json(); 
                throw new Error(data.error || 'Erro desconhecido');
            }
    
            const data = await response.json(); // Captura a resposta JSON
    
            alert('Carro cadastrado com sucesso!');
            setCarro({ id: 0, modelo: '', ano: 0, usuario: { nome: '', email: '', telefone: '' } });
            navigate.push('/cadastro'); // Redireciona para a página 
        } catch (error) {
            console.error("Erro ao cadastrar o carro", error);
            alert('Ocorreu um erro ao tentar cadastrar o carro. Tente novamente mais tarde.');
        }
    };

    return (
        <main className="grow">
                        <h2 className="text-3xl text-center text-[#4a90e2] mb-8">Cadastro de Carro</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border border-gray-300 rounded shadow-md bg-white">
                <div className="mb-4">
                    <label htmlFor="modelo" className="block text-sm font-medium text-gray-700">
                        Modelo do Carro
                    </label>
                    <input
                        type="text"
                        name="modelo"
                        id="modelo"
                        value={carro.modelo}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="ano" className="block text-sm font-medium text-gray-700">
                        Ano do Carro
                    </label>
                    <input
                        type="number"
                        name="ano"
                        id="ano"
                        value={carro.ano}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Dados do Usuário</h3>
                <div className="mb-4">
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                        Nome
                    </label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={carro.usuario.nome}
                        onChange={handleUserChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={carro.usuario.email}
                        onChange={handleUserChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
                        Telefone
                    </label>
                    <input
                        type="tel"
                        name="telefone"
                        id="telefone"
                        value={carro.usuario.telefone}
                        onChange={handleUserChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#4a90e2] text-white font-semibold py-2 rounded-md hover:bg-[#357ABD] transition duration-300"
                >
                    Cadastrar Carro
                </button>
            </form>
        </main>
    );
}
