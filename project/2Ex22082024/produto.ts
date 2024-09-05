// Ex1 - 1
interface Pessoa {
    nome: string
    preco: number
    categoria: string
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix'

function retornaPessoaEFormaPagamento(pessoa: Pessoa, formaPagamento: FormaPagamento): string {
    return `Pessoa: ${pessoa.nome}, forma pagamento: ${formaPagamento}`
}

// Ex1 - 2
type Pessoa2 = {
    nome: string
    idade: number
}

type Empregado = {
    empresa: string
    salario: number
}

type Pessoa2Empregada = Pessoa2 & Empregado

function retornaPessoa2EEmpregado(pessoaEmpregada: Pessoa2Empregada): string {
    return `Pessoa: ${pessoaEmpregada.nome}
            Idade: ${pessoaEmpregada.idade}
            Empresa: ${pessoaEmpregada.idade}
            Salario: ${pessoaEmpregada.salario}`
}

// Ex2 - 1
class Funcionario {
    nome: string
    cargo: string
    salario: number

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }

    retornaDesc(): string {
        return `Eu sou o funcionário ${this.nome}`        
    }
}

class Gerente extends Funcionario {
    departamento: string

    constructor(nome: string, cargo: string, salario: number, departamento: string) {
        super(nome, cargo, salario)
        this.departamento = departamento
    }

    override retornaDesc(): string {
        return `Eu sou o gerente ${this.nome} e supervisiono o departamento ${this.departamento}`
    }
}

// Ex2 - 2
class ContaBancaria {
    titular: string
    saldo: number

    constructor(titular: string, saldo: number) {
        this.titular = titular
        this.saldo = saldo
    }

    exibirSaldo(): void {
        console.log(`Saldo: ${this.saldo}`)
    }
}

class ContaCorrente extends ContaBancaria {
    limiteCredito: number

    constructor(titular: string, saldo: number, limiteCredito: number) {
        super(titular, saldo)
        this.limiteCredito = limiteCredito
    }

    override exibirSaldo(): void {
        console.log(`Saldo: ${this.saldo}. Limite: ${this.limiteCredito}`)        
    }
}
