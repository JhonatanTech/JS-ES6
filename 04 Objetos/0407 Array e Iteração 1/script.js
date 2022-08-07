/**
 * [].forEach()
 * [].forEach(callback(itemAtual, index, array)) a função de callback é executada para
 * cada item da array. ela possui três argumentos, itemAtual(valor do item da array),
 * index(index do valor na array) e array (array original)
 */
const carros = ['ford', 'fiat', 'honda']
carros.forEach((item,index,array) => {
    console.log(item.toUpperCase);
});

/**
 * arrow function
 */
const li = document.querySelectorAll('li')

li.forEach(i => i.classList.add('ativa'));

/**
 * modificar a array original
 * o terceiro argumento do callback é uma referencia direta e se modificado irá também modificar a array original
 */
carros.forEach((item, index, array) => {
    array[index] = 'Carro' + item
});
carros

/**
 * [].map()
 * [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach()
 * porem ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return
 * de cada iteração
 */
const newCarros = carros.map(item => {
    return 'Carro' + item
})

/**
 * valor retornado
 * se não retornamos nenhum valor durante a iteração utilizando amp, o valor retornado como
 * qualquer função que não possui o return, será undefined
 */
const newCarros2 = carros.map(item => {
    const novo = 'Carro' + item
})
newCarros2

/**
 * arrow function e [].map()
 * uma arrow function de linha unica e sem chaves irá retornar o valor após a fat arrow =>
 */
const numeros = [2, 4, 6, 8]
const numX3 = numeros.map(n => n * 3)

/**
 * [].map() vs [].forEach()
 * se o objetivo for modificar os valores da array atual, sempre utilize
 * o map, pois assim uma nova array com os valores modificados é retornada e vc pode imediatamente
 * iterar novamente sobre estes valores
 */

/**
 * [].map() com objetos
 * map pode ser muito util para interagirmos com uma array de objetos, onde desejamos isolar um valor
 * unico de cada objeto
 */
const aulas = [
    {
        nome: 'html1',
        min: 15
    },
    {
        nome: 'html2',
        min: 15
    }
]
const tempoAulas = aulas.map(aula => aula.min)

/**
 * [].reduce()
 * [].reduce(callback(acumulador, valorAtual, index,array), valorInicial)
 * executa a função de callback para cada item array. um valor especial existe
 * nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas 
 * o retorno da iteração anterior
 */
const aulas2 = [10, 25, 30]
const total1 = aulas2.reduce((acumulador, atual) => {
    return acumulador + atual
})
total1

const total2 = aulas2.reduce((acc, cur) => acc + cur, 100)
total2

/**
 * maior valor com [].reduce()
 */
const numeros2 = [10, 25, 60, 5, 35, 10]

const maiorValor = numeros2.reduce((anterior, atual) => {
    return anterior < atual ? atual : anterior
})
maiorValor//60