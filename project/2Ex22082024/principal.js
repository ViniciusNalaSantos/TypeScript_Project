"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var financeiro_1 = require("./financeiro");
var orcamento = new financeiro_1.FinanceiroNamespace.Orcamento(50, ["cadeira", "mesa"]);
var financeiro = new financeiro_1.FinanceiroNamespace.Financeiro();
orcamento.valorTotal = orcamento.valorTotal - financeiro.calcularImposto(orcamento.valorTotal, 0.15);
orcamento.valorTotal = orcamento.valorTotal - financeiro.calcularDesconto(orcamento.valorTotal, 0.15);
console.log(orcamento.valorTotal);
