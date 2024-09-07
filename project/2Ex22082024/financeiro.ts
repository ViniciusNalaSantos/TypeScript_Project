export namespace FinanceiroNamespace {
    export class Financeiro {
        
        calcularImposto(valor: number, taxaImposto: number): number {
            return valor * taxaImposto
        }

        calcularDesconto(valor: number, taxaImposto: number): number {
            return valor * taxaImposto
        }
    }
    export class Orcamento {
        valorTotal: number
        itens: Array<string>
        constructor(valorTotal: number, itens: Array<string>) {
            this.valorTotal = valorTotal
            this.itens = itens
        }
    }
}
// Essa classe será instanciada em Principal