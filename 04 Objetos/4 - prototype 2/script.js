/**
 * Construtores nativos
 * Objetos, funções, numeros, string e outros tipos de dados são criados utilizando construtores.
 * Esses construtores possuem um prototipo com propriedades e metodos, que poderão se acessadas pelo tipo de dado
 */
const pais = 'Brasil'
const cidade = new String('Rio');

pais.charAt(0) //B
cidade.charAt(0)

String.prototype

/**
 * É possivel acessar a funcao do prototipo
 * é comum, principalmente em codigos mais antigos, o uso direto de funções de protótipo do construtor Array
 */
const lista = document.querySelectorAll('li')

//transforma em um Array
const listaArray = Array.prototype.slice.call(lista)

/**
 * Método do Objeto vs protótipo
 * Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo
 */
Array.prototype.slice.call()
Array.from(lista) //método novo de tranformar uma lista em array

// Retorno uma lista com os métodos / propriredades
Object.getOwnPropertyNames(Array)
Object.getOwnPropertyNames(Array.prototype)

/**
 * Apenas os métodos do protótipo são herdados
 */
[1, 2, 3].slice() //existe 
[1, 2, 3].from() //não existe 

/**
 * Exercicio
 * Crie uma função construtora de Pessoas
 * Deve conter nome, sobrenome e idade
 * Crie um método no protótipo que retorne
 * o nome completo da pessoa
 */
function Pessoa(nome, sobrenome,idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
}

const andre = new Pessoa('andre', 'rafael', 45)

/**
 * Liste os métodos acessados por
 * dados criados com NodeList,
 * HTMLCollection, Document
 */
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

/**
 * Liste os construotres dos dados abaixo
 */
const li = document.querySelector('li')

// usar li.constructorr.name

li
li.click
li.innerText
li.value
li.hidden
li.offsetLeft
li.click()


/**
 * Qual o construtor do dado abaixo:
 */
li.hidden.constructor.name //string