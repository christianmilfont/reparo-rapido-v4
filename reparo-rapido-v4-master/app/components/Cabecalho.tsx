import Menu from './Menu';

export default function Cabecalho() {
    return (
        <header className='bg-white min-h-20 p-5 flex justify-evenly items-center'>
            <h1 className='text-3xl text-[#4a90e2]'>Bem Vindo</h1>
            <Menu />
        </header>
    );
}
