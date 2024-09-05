
// Ex3
class Pessoa {
    nome: string
    idade: number

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }
}

class Aluno extends Pessoa {
    curso: string

    constructor(nome: string, idade: number, curso: string) {
        super(nome, idade)
        this.curso = curso
    }
}

let aluno: Aluno = new Aluno("Vinicius", 19, "Programação")
console.log(`Aluno: "${aluno.nome}", Idade: "${aluno.idade}", Curso: "${aluno.curso}"`)
