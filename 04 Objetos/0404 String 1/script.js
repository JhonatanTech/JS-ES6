/**
 * String
 * É a construtora de strings, toda string possui as propriedades e métodos do prototype de String
 */
const comida = 'Pizza'
const liquido = new String('Água');
const ano = new String(2018);

/**
 * str.length
 * Propriedade com o total de caracteres da string
 */
const frase = 'a melhor comida'

comida.length //5
frase.length //15

comida[0] //p
frase[0] //a
frase[frase.length - 1] //a

/**
 * str.charAt(n)
 * retorna o caracter de acordo com o index de (n)
 */
const linguagem = ' Javascript'

linguagem.charAt(0) //j
linguagem.charAt(2) //v
linguagem.charAt(linguagem.length - 1)

/**
 * str.concat(str2, str3)
 * concatena as string e retorna o resultado
 */
const fraseCompleta = frase.concat(linguagem, '!!')
console.log(fraseCompleta);

/**
 * str.includes(search, position)
 * Procura pela string exata dentro de outra string. A procura é case sensitive
 */
const fruta = 'banana'
const listaFrutas = 'melancia, banana, laranja'

listaFrutas.includes(fruta) //true
fruta.includes(listaFrutas) //false

//o segundo parametro diz apartir de onde começar
listaFrutas.includes(fruta, 4) //true
listaFrutas.includes(fruta, 14) //false

/**
 * str.endsWith(search) e str.startWith(search)
 * Procura pela string exata dentro de outra string. A procura é case sensitive
 */

fruta.endsWith('nana') //true
fruta.startsWith('ba') //true
fruta.startsWith('na') //false

/**
 * str.slice(start, end)
 * Corta a string de acordo com os valores de start e end
 */
const trans1 = 'depósito de cliente'
const trans2 = 'depósito de fornecedor'
const trans3 = 'taxa de camisas'

trans1.slice(0, 3) //dep
trans2.slice(0, 3) //dep
trans3.slice(0, 3) //tax

trans1.slice(12) //cliente
trans1.slice(-4) //ente
trans1.slice(3, 6) //ósi

/**
 * str.substring(start,end)
 * Corta a string de acordo com os valores de start e end. Não funciona com valores negativos como o slice
 */

linguagem.substring(3, 5) //as
linguagem.substring(3, 4) //java
linguagem.substring(-3) //javascript

/**
 * str.indexOf(search) e str.lastIndexOf(search)
 * Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o ultimo
 */
const instrumento = 'guitarra'
instrumento.indexOf('r') //5
instrumento.lastIndexOf('r') //6 o ultimo 'r'
instrumento.indexOf('ta') //3

/**
 * str.padStart(n,str) e str.padEnd(n,str)
 * Aumenta o tomanaho da string para o valor de n. Ou seja, uam string com 8 caracteres, se passarmos n = 10. ela passará a ter 10 caracteres.
 * O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
 */

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 1200']

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10,'.'));
})
//ele comeplementa a string até 10 caracteres com '.'
listaPrecos[0].padStart(10, '.') // .....R$ 99
listaPrecos[0].padEnd(10, '.') // R$ 99.....