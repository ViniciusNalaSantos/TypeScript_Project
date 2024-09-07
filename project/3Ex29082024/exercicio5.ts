// Ex5
function medirTempoDeExecucao(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Lógica do decorator aqui
    const metodoOriginal = descriptor.value;
    const agora = Date.now()
    descriptor.value = function (...args: any[]) {
        return metodoOriginal.apply(this, args);
    }
    const depois = Date.now()
    console.log("Tempo de execução: " + ((agora - depois)/1000))
    return metodoOriginal
}

class Calculadora {
    @medirTempoDeExecucao
    somarNumeros(array: number[]): number {
        // Simula uma soma de números
        return array.reduce((a, b) => a + b, 0);
    }
}

// Exemplo de uso:
const calc = new Calculadora();
calc.somarNumeros([1, 2, 3, 4, 5]);  // Deve exibir o tempo de execução
