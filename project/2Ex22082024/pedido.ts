import { ClienteNamespace } from './cliente';

class Pedido extends ClienteNamespace.Cliente {
    produto: string
    valor : number

    constructor(nome: string, email: string, produto: string, valor: number) {
        super(nome, email)
        this.produto = produto
        this.valor = valor
    }
}

const pedido: Pedido = new Pedido("João", "joao@gmail.com", "Pizza", 55)
function mostraPedido(pedido: Pedido) {
    console.log(`Cliente: ${pedido.nome} Email: ${pedido.email} Produto: ${pedido.produto} Valor: ${pedido.valor}`)
}
console.log(mostraPedido(pedido))
