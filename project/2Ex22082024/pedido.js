"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./cliente");
var Pedido = /** @class */ (function (_super) {
    __extends(Pedido, _super);
    function Pedido(nome, email, produto, valor) {
        var _this = _super.call(this, nome, email) || this;
        _this.produto = produto;
        _this.valor = valor;
        return _this;
    }
    return Pedido;
}(cliente_1.ClienteNamespace.Cliente));
var pedido = new Pedido("João", "joao@gmail.com", "Pizza", 55);
function mostraPedido(pedido) {
    console.log("Cliente: ".concat(pedido.nome, " Email: ").concat(pedido.email, " Produto: ").concat(pedido.produto, " Valor: ").concat(pedido.valor));
}
console.log(mostraPedido(pedido));
