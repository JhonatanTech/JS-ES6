/**
 * [].reduceRight()
 * existe tambem o método [].reduceRight(), a diferença é que este começa a iterar da direita pra esquerda
 * enquanto o reduce itera da esquerda para a direita
 */
const frutas = ['banana', 'pera', 'uva']
const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta)
const frutasleft = frutas.reduce((acc, fruta) => acc + ' ' + fruta)

frutasRight
frutasleft

/**
 * [].some()
 * [].some(), se pelo menos um return da iteração for truthy, ele retorna true
 */
const temUva = frutas.some((fruta) => {
    return fruta === 'uva'
})//true

function maiorQue100(numero) {
    return numero > 100
}
const numeros = [6, 43, 22, 88, 101, 5]
const temMaior = numeros.some(maiorQue100) //true

/**
 * [].every()
 * [].every() se todos os returns das ietrações forem truthy, o método irá retornar true
 * se pelo menos um for falsy, ele irá retornar false
 */
 //flase pois pelo menos uma fruta esta vazia '', o que é um valor falsy
const arrayCheias = frutas.every((fruta) => {
    return fruta//false
})

const maiorQue3 = numeros.every(x => x > 3)//true