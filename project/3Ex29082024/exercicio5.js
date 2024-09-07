var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
// Ex5
function medirTempoDeExecucao(target, propertyKey, descriptor) {
    // Lógica do decorator aqui
    var metodoOriginal = descriptor.value;
    var agora = Date.now();
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return metodoOriginal.apply(this, args);
    };
    var depois = Date.now();
    console.log("Tempo de execução: " + ((agora - depois) / 1000));
    return metodoOriginal;
}
var Calculadora = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _somarNumeros_decorators;
    return _a = /** @class */ (function () {
            function Calculadora() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            Calculadora.prototype.somarNumeros = function (array) {
                // Simula uma soma de números
                return array.reduce(function (a, b) { return a + b; }, 0);
            };
            return Calculadora;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _somarNumeros_decorators = [medirTempoDeExecucao];
            __esDecorate(_a, null, _somarNumeros_decorators, { kind: "method", name: "somarNumeros", static: false, private: false, access: { has: function (obj) { return "somarNumeros" in obj; }, get: function (obj) { return obj.somarNumeros; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
// Exemplo de uso:
var calc = new Calculadora();
calc.somarNumeros([1, 2, 3, 4, 5]); // Deve exibir o tempo de execução
