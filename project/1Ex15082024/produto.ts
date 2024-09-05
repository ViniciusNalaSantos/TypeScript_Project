// Ex2
interface ILivro {
    titulo: string;
    autor : string;
    anoPublicacao: string;
}

function showProduto(livro:  ILivro): string {
    return `Titulo: "${livro.titulo}", Autor: "${livro.autor}", anoPulicacao: "${livro.anoPublicacao}"`;
    }

const livro: ILivro = {titulo: "Senhor dos Anéis", autor: "Tolkie", anoPublicacao: "09/04/2024"}

console.log(showProduto(livro))
