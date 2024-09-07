"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceiroNamespace = void 0;
var FinanceiroNamespace;
(function (FinanceiroNamespace) {
    var Financeiro = /** @class */ (function () {
        function Financeiro() {
        }
        Financeiro.prototype.calcularImposto = function (valor, taxaImposto) {
            return valor * taxaImposto;
        };
        Financeiro.prototype.calcularDesconto = function (valor, taxaImposto) {
            return valor * taxaImposto;
        };
        return Financeiro;
    }());
    FinanceiroNamespace.Financeiro = Financeiro;
    var Orcamento = /** @class */ (function () {
        function Orcamento(valorTotal, itens) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }
        return Orcamento;
    }());
    FinanceiroNamespace.Orcamento = Orcamento;
})(FinanceiroNamespace || (exports.FinanceiroNamespace = FinanceiroNamespace = {}));
// Essa classe será instanciada em Principal
