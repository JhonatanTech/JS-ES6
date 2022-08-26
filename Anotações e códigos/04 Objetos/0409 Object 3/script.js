/**
 * propriedades e métodos do prototipo
 * já que tudo em javascript é objeto, 
 * as propriedades abaixo estão disponiveis em todos os objetos criados a partir de funções construtoras
 * {}.constructor retorna a função construtora do objeto
 */
const frutas = ['banana', 'uva']
frutas.constructor //Array

const frase = 'isso é uma string'
frase.constructor //String

/**
 * {}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop')
 * verifica se possui a propriedade e retorna true. A propriedade deve se direta
 * do objetoe não do prototipo
 * O {}.propertyIsEnumerable() verifica se a propriedade é enumeravel
 */
frutas.hasOwnProperty("map")//false
Array.hasOwnProperty('map')//false
Array.prototype.hasOwnProperty('map')//true

Array.prototype.propertyIsEnumerable('map')//false
window.propertyIsEnumerable('innerHeight')//true

/**
 * {}.isPrototypeOf(valor)
 * verifica se é o prototipo do valor passado
 */
Array.prototype.isPrototypeOf(frutas)//true

/**
 * {}.toString()
 * retorna o tipo do objeto. o problema é toString() ser uma função dos prototipos de Array, String e mais
 * Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor)
 */
frutas.toString() //'banana, uva'
typeof frutas //object
Object.prototype.toString.call(frutas) //[Object Array]

frase.toString() //isso é uma string
typeof frase //string
Object.prototype.toString.call(frase) //[Object String]