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

export interface TipoCarro {
    id: number;
    modelo: string;
    ano: number;
    usuario: {
        nome: string;
        email: string;
        telefone: string;
    };
}

export type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
