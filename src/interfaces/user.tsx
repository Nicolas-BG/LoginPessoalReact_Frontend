export default interface User {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    cargo: string;
    foto: string | null;
}