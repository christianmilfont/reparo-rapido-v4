import { TipoCarro } from "@/app/types"; // Certifique-se de que TipoCarro está definido corretamente
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

// Função para simular um banco de dados de usuários
const users = [
    { nome: "admin", senha: "12345" }, // credenciais
    //  adicionar mais usuários aqui
];

//  verificar se o usuário está autenticado
const isAuthenticated = (nome: string, senha: string): boolean => {
    return users.some(user => user.nome === nome && user.senha === senha);
};

export async function GET() {
    const file = await fs.readFile(process.cwd() + '/app/data/base.json', 'utf-8');
    const produtos = JSON.parse(file);

    return NextResponse.json(produtos);
}

export async function POST(request: Request) {
    const file = await fs.readFile(process.cwd() + '/app/data/base.json', 'utf-8');
    const data: TipoCarro[] = JSON.parse(file); // Supondo que o arquivo contenha uma lista de TipoCarro

    const carro: TipoCarro = await request.json();
    
    // Adicionando ID único
    carro.id = Number(Date.now());
    data.push(carro);

    const json = JSON.stringify(data);
    await fs.writeFile(process.cwd() + '/app/data/base.json', json);

    return NextResponse.json(carro);
}

// Endpoint para login
export async function POST_LOGIN(request: Request) {
    const { nome, senha } = await request.json();

    if (isAuthenticated(nome, senha)) {
       
     
        const token = Buffer.from(`${nome}:${senha}`).toString('base64'); // Criando um token base64
        return NextResponse.json({ message: "Login bem-sucedido!", token });
    } else {
        return NextResponse.json({ error: "Credenciais inválidas." }, { status: 401 });
    }
}

// Endpoint para verificação de autenticação
export async function GET_CHECK(request: Request) {
    // Simulação de verificação (a lógica real dependeria de como você armazena tokens/cookies)
    const token = request.headers.get("Authorization")?.split(" ")[1]; // Exemplo de Bearer token

    if (!token) {
        return NextResponse.json({ isAuthenticated: false }, { status: 401 });
    }

    const [nome, senha] = Buffer.from(token, 'base64').toString().split(":");

    // Verifica se o token corresponde a um usuário autenticado
    if (isAuthenticated(nome, senha)) {
        return NextResponse.json({ isAuthenticated: true });
    } else {
        return NextResponse.json({ isAuthenticated: false }, { status: 401 });
    }
}

// Endpoint para logout (opcional)
export async function POST_LOGOUT(request: Request) {
    // Aqui você pode implementar a lógica de logout, como limpar tokens ou cookies
    return NextResponse.json({ message: "Logout realizado com sucesso." });
}
