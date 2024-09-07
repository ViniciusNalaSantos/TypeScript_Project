// Ex4
function encontrarMaiorElemento<T>(arrayElementos: Array<T>): T {
    let result = arrayElementos[0]
    for (let i = 1; i < arrayElementos.length; ++i) {
        const entry = arrayElementos[i];
        if (result < entry) {
            result = entry
        }
    }
    return result
}

let lista : Array<string> = ["f", "c", "a", "z", "e", "l"] // Array<number> = [5,3,7,9,22,6,4,66,3,9,4]
console.log(encontrarMaiorElemento(lista))

