type Pessoa = {
    nome: String;
    idade: Number;
}

type Empregado = {
    empresa: String;
    salario: Number;
}

type PessoaEmpregada = Pessoa & Empregado

function retornaPessoaEmpregada(pessoaEmpregada: PessoaEmpregada): PessoaEmpregada {
    return pessoaEmpregada;
}