export type TipoProduto = {
    id: number;
    nome: string;
    preco: number;
    estoque: number;
}

export type TipoUsuario = {
    nome: string;
    email: string;
    telefone: string;
}

export type TipoCarro = {
    id: number;
    modelo: string;
    ano: number;
    usuario: TipoUsuario; // Relaciona o carro com os dados do usuário
}

export type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
