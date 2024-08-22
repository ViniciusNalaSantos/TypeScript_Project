interface Produto {
    nome: String;
    idade: Number;
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix'

function retornaProdutoFormaPagamento(produto: Produto, formaPagamento: FormaPagamento) {
    console.log(`Produto: ${produto} + Forma de Pagamento: ${formaPagamento}`)
}
