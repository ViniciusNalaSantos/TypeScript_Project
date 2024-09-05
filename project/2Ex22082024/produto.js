var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function retornaPessoaEFormaPagamento(pessoa, formaPagamento) {
    return "Pessoa: ".concat(pessoa.nome, ", forma pagamento: ").concat(formaPagamento);
}
function retornaPessoa2EEmpregado(pessoaEmpregada) {
    return "Pessoa: ".concat(pessoaEmpregada.nome, "\n            Idade: ").concat(pessoaEmpregada.idade, "\n            Empresa: ").concat(pessoaEmpregada.idade, "\n            Salario: ").concat(pessoaEmpregada.salario);
}
// Ex2 - 1
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    Funcionario.prototype.retornaDesc = function () {
        return "Eu sou o funcion\u00E1rio ".concat(this.nome);
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, cargo, salario, departamento) {
        var _this = _super.call(this, nome, cargo, salario) || this;
        _this.departamento = departamento;
        return _this;
    }
    Gerente.prototype.retornaDesc = function () {
        return "Eu sou o gerente ".concat(this.nome, " e supervisiono o departamento ").concat(this.departamento);
    };
    return Gerente;
}(Funcionario));
// Ex2 - 2
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.exibirSaldo = function () {
        console.log("Saldo: ".concat(this.saldo));
    };
    return ContaBancaria;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(titular, saldo, limiteCredito) {
        var _this = _super.call(this, titular, saldo) || this;
        _this.limiteCredito = limiteCredito;
        return _this;
    }
    ContaCorrente.prototype.exibirSaldo = function () {
        console.log("Saldo: ".concat(this.saldo, ". Limite: ").concat(this.limiteCredito));
    };
    return ContaCorrente;
}(ContaBancaria));
