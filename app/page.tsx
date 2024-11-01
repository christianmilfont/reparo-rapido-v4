import Carrossel from "./components/Carrosel"; // Certifique-se de que o caminho esteja correto
import Card from "./components/Card"; // Importe o novo componente Card
import { SlMagnifier } from "react-icons/sl";
import { SlSpeedometer } from "react-icons/sl";
import { SlOrganization } from "react-icons/sl";
import { SlBubbles } from "react-icons/sl";

export default function Home() {
    return (
        <main className="grow flex flex-col justify-center items-center bg-[#f8f4f1] py-10">
            <h1 className="text-center text-4xl text-[#4a90e2] font-bold mx-5 mb-8 transition-all duration-500 ease-in-out transform hover:scale-105">
                Reparo Rápido
            </h1>
            <Carrossel />
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                margin: '20px 0',
                maxWidth: '800px'
            }}>
                {[
                    { text: 'Encontre a seguradora ideal em um piscar de olhos!', icon: <SlMagnifier /> },
                    { text: 'Economize tempo, escolha a melhor cobertura agora mesmo!', icon: <SlSpeedometer />},
                    { text: 'Descubra seguradoras próximas e ganhe tempo na sua busca!', icon: <SlOrganization />},
                ].map((item, index) => (
                    <Card key={index} message={<><span>{item.icon} </span>{item.text}</>} />
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <h2 style={{ color: '#4a90e2', fontSize: '2rem', marginBottom: '10px' }}>Projeto: Reparo Rápido</h2>
                <p style={{ color: '#666', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                    A nossa seguradora oferece serviços de reparo rápido e confiável para garantir a sua tranquilidade.
                </p>
            </div>
        </main>
    );
}
