// Ex4
function encontrarMaiorElemento(arrayElementos) {
    var result = arrayElementos[0];
    for (var i = 1; i < arrayElementos.length; ++i) {
        var entry = arrayElementos[i];
        if (result < entry) {
            result = entry;
        }
    }
    return result;
}
var lista = ["f", "c", "a", "z", "e", "l"]; // Array<number> = [5,3,7,9,22,6,4,66,3,9,4]
console.log(encontrarMaiorElemento(lista));
