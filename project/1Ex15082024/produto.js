function showProduto(livro) {
    return "Titulo: \"".concat(livro.titulo, "\", Autor: \"").concat(livro.autor, "\", anoPulicacao: \"").concat(livro.anoPublicacao, "\"");
}
var livro = { titulo: "Senhor dos Anéis", autor: "Tolkie", anoPublicacao: "09/04/2024" };
console.log(showProduto(livro));
