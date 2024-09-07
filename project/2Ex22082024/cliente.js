"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteNamespace = void 0;
var ClienteNamespace;
(function (ClienteNamespace) {
    var Cliente = /** @class */ (function () {
        function Cliente(nome, email) {
            this.nome = nome;
            this.email = email;
        }
        return Cliente;
    }());
    ClienteNamespace.Cliente = Cliente;
})(ClienteNamespace || (exports.ClienteNamespace = ClienteNamespace = {}));
