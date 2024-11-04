import Link from "next/link";
import { SlEnvolope } from "react-icons/sl";
import { SlBubble } from "react-icons/sl";
import { SlGrid } from "react-icons/sl";
import { SlLockOpen } from "react-icons/sl";

export default function Menu() {
    return (
        <nav className="flex">
            <ul className="flex gap-6">
                <li>
                    <Link href={'/'} className="flex items-center text-[#4a90e2] hover:text-white bg-white hover:bg-[#4a90e2] py-2 px-4 rounded-lg transition-all duration-300 ease-in-out shadow">
                        Home <SlGrid className="ml-2" />
                    </Link>
                </li>
                <li>
                    <Link 
                        href={"/cadastrar-carro"} 
                        className="flex items-center text-[#4a90e2] hover:text-white bg-white hover:bg-[#4a90e2] py-2 px-4 rounded-lg transition-all duration-300 ease-in-out shadow"
                    >
                        Serviços <SlEnvolope className="ml-2" />
                    </Link>
                </li>
                <li>
                    <Link href={'/produtos/reclamacoes'} className="flex items-center text-[#4a90e2] hover:text-white bg-white hover:bg-[#4a90e2] py-2 px-4 rounded-lg transition-all duration-300 ease-in-out shadow">
                        Contato <SlBubble className="ml-2" />
                    </Link>
                </li>
                <li>
                    <Link href={'/cadastro'} className="flex items-center text-[#4a90e2] hover:text-white bg-white hover:bg-[#4a90e2] py-2 px-4 rounded-lg transition-all duration-300 ease-in-out shadow">
                        Cadastrar <SlLockOpen className="ml-2" />
                    </Link>
                </li>
                <li>
                    <Link href={'/login'} className="flex items-center text-[#4a90e2] hover:text-white bg-white hover:bg-[#4a90e2] py-2 px-4 rounded-lg transition-all duration-300 ease-in-out shadow">
                        Login <SlLockOpen className="ml-2" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
