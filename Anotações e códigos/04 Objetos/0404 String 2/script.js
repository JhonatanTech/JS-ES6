/**
 * str.repeat(n)
 * repete a string (n) vezes
 */
const frase = 'ta'
frase.repeat(5) //tatatatata

/**
 * str.replace(regexp|substr, newstr|function)
 * troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto.
 * se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar
 */
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'
listaItens = listaItens.replace(/[ ]+/g, ',')

let preco = 'R$ 1200,43'
preco = preco.replace(',', '.') //'R$ 1200.43

/**
 * str.split(padrao)
 * divide a string de acordo com o padrão passado e retorna um array
 */
const arrayItens = listaItens.split(' ')//remove o " " e retorna o array

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
const htmlArray = htmlText.split('div')//remove 'div' de htmlText
const htmlNovo = htmlArray.join('section')// pega o intervalo de cada item do array e adiciona 'section'

/**
 * str.toLowerCase() e str.toUpperCase()
 * retorna a string em letras maisculas ou minusculas. Bom para verficarmos input de usuarios
 */
const sexo1 = 'Feminino'
const sexo2 = 'feminino'
const sexo3 = 'FEMININO'

(sexo1.toLowerCase() === 'feminino')
(sexo2.toLowerCase() === 'feminino')
    (sexo3.toLowerCase() === 'feminino')

/**
 * str.trim(), str.trimStart(), str.trimEnd()
 * remove espaço em branco do inicio ou final de uma string
 */
const valor = ' R$ 23.00 '
valor.trim() //'R$ 23.00'
valor.trimStart()//'R$ 23.00 '
valor.trimEnd()//' R$ 23.00'