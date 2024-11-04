"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/app/context"; // Ajuste o caminho conforme necessário
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const { login } = useAuth();
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        // Função para verificar se o usuário já está autenticado
        const checkUserAuthentication = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/base-produtos`, {
                    method: 'GET',
                    credentials: 'include', // se você estiver usando cookies para autenticação
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.isAuthenticated) {
                        router.push("/cadastrar-carro"); // Redireciona se o usuário já estiver autenticado
                    }
                }
            } catch (error) {
                console.error("Erro ao verificar autenticação:", error);
            }
        };

        checkUserAuthentication();
    }, [router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/api/base-produtos`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nome, senha }),
            });

            const data = await response.json();

            if (response.ok) {
                login({ nome, senha }); // Armazena o usuário no contexto
                alert("Login realizado com sucesso!");
                router.push("/"); // Redireciona para a página inicial ou qualquer outra página
            } else {
                setError(data.error || 'Erro ao realizar login');
            }
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            setError('Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.');
        }
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-500 transition duration-300"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </main>
    );
};

export default LoginPage;
