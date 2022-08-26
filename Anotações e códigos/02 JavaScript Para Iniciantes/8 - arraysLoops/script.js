
var videoGame = ['switch', 'ps4', 'xbox']

videoGame.pop() //remove o ultimo item e retorna ele ou o parametro 
videoGame.push('3ds') //adiciona ai final de uma array
videoGame.length //retorna a quantidade de itens na lista

/**
 * Exixtem outros metodos, como map, reduce, forEach...
 */

/**
 * forEach
 * forEach é um metodo que executa uma função para cada item da Arrays. É uma forma mais simples de utilizarmos um loop com arrays(ou array-like)
 */
var videoGame2 = ['switch', 'ps4', 'xbox']
videoGame.forEach( function(item, index, array) {
    console.log(item, index, array) //o argumento item sera atribuido dinamicamente
}); //podemos passra os seguinte parametros item, index e array