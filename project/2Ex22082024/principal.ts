import { FinanceiroNamespace } from "./financeiro";

let orcamento: FinanceiroNamespace.Orcamento = new FinanceiroNamespace.Orcamento(50, ["cadeira","mesa"])
let financeiro: FinanceiroNamespace.Financeiro = new FinanceiroNamespace.Financeiro()

orcamento.valorTotal = orcamento.valorTotal - financeiro.calcularImposto(orcamento.valorTotal, 0.15)
orcamento.valorTotal = orcamento.valorTotal - financeiro.calcularDesconto(orcamento.valorTotal,0.15)
console.log(orcamento.valorTotal)
