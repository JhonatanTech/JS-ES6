/**
 * [].find() e [].findIndex()
 * [].find(), retorna o valor atual da primeira iteração que retorna um valor truthy
 * já o [].findIndex(), ao invés de retorna o valor, retorna o index deste valor no array
 */
const frutas = ['banana', 'pera', 'uva', 'maça']
const buscaUva = frutas.findIndex((fruta) => {
    return fruta === 'uva'
})

const numeros = [6, 43, 22, 88, 101, 29]
const buscaMaior45 = numeros.find(x => x > 45)//88

/**
 * [].filter()
 *  retorna um array com a lista de valores que durante a sua iteração retornaram um valor truthy
 */
const frutas2 = ['banana', undefined, null, 'pera', 'uva', 0, 'maça']
const arrayLimpa = frutas2.filter((fruta) => {
    return fruta
})//['banana','uva','maça']

const buscarMaior45 = numeros.filter(x => x > 45)//[88,101]