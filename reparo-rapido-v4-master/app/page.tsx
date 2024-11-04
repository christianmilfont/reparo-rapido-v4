"use client";
import Carrossel from "./components/Carrosel"; // Certifique-se de que o caminho esteja correto
import Card from "./components/Card"; // Importe o novo componente Card
import { SlMagnifier, SlSpeedometer, SlOrganization } from "react-icons/sl";

export default function Home() {
    const handleLoginClick = () => {
        window.location.href = "/login"; // Redireciona para a página de login
    };

    return (
        <main className="grow flex flex-col justify-center items-center bg-[#f8f4f1] py-10">
            <h1 className="text-center text-4xl text-[#4a90e2] font-bold mx-5 mb-8 transition-transform duration-500 ease-in-out transform hover:scale-105">
                Reparo Rápido
            </h1>
            <Carrossel />
            <div className="flex justify-around flex-wrap my-5 max-w-2xl">
                {[    
                    { text: 'Encontre a seguradora ideal em um piscar de olhos!', icon: <SlMagnifier /> },
                    { text: 'Economize tempo, escolha a melhor cobertura agora mesmo!', icon: <SlSpeedometer /> },
                    { text: 'Descubra seguradoras próximas e ganhe tempo na sua busca!', icon: <SlOrganization /> },
                ].map((item, index) => (
                    <Card key={index} message={<><span>{item.icon} </span>{item.text}</>} />
                ))}
            </div>
            <div className="text-center mt-10">
                <h2 className="text-[#4a90e2] text-2xl mb-2">Projeto: Reparo Rápido</h2>
                <p className="text-gray-600 text-base max-w-md mx-auto">
                    A nossa seguradora oferece serviços de reparo rápido e confiável para garantir a sua tranquilidade.
                </p>
                <button 
                    className="mt-5 px-5 py-2 bg-[#4a90e2] text-white rounded transition duration-300 hover:bg-[#357ABD]"
                    onClick={handleLoginClick} // Função para redirecionar
                >
                    Acessar Minha Conta
                </button>
            </div>
        </main>
    );
}
