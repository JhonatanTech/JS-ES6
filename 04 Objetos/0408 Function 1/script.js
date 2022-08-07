/**
 * function
 * toda função é criada com o construtor Function e por isso herda as sua propriedades e métodos
 */
function areaQuadrada(lado) {
    return lado *lado
}
const perimetroQuadrado = new Function('lado', 'return lado * 4 ')

/**
 * propriedades
 * Function.length retorna o total de argumentos da função
 * Function.name retorna uma string com o nome da função
 */
function somar(n1,n2) {
    return n1 + n2
}
somar.length //2
somar.name //'somar

/**
 * function.call()
 * function.call(this, arg1, arg2, ...) executa a função, sendo possivel passarmos uma nova referencia ao this da mesma
 */
const carro = {
    marca: 'Ford',
    ano: 2018
}

function descriçãoCarro() {
    console.log(this.marca + ' ' + this.ano);
}

descriçãoCarro()//undefined undefined
descriçãoCarro.call()//undefined undefined
descriçãoCarro.call(carro)//Ford 2018

/**
 * this
 * o valor de this faz referencia ao objeto criado durante a construção do objeto(Constructor Function)
 * Podemos trocar a referencia do método ao this, utilizando o call()
 */
const carros = ['ford', 'fiat','vw']
carros.forEach((item) => {
    console.log(item);
});//log de cada carro

carros.forEach.call(carros, (item) => {
    console.log(item);
})//log de cada carro

const frutas = ['banana', 'pera', 'uva']

carros.forEach.call(frutas, (item) => {
    console.log(item);
})//log de cada fruta

/**
 * exemplo real
 * o objeto atribuido a lista será o substituto pelo primeiro argumento de call()
 */
function Dom(seletor) {
    this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function (classe) {
    this.element.classList.add(classe)
}

const lista = new Dom('ul')
lista.ativo('ativar')
console.log(lista);

/**
 * o objeto deve ser parecido
 * o novo valor de this deve ser semelhante a estrutura do valor do this original do método
 * caso contrário o método nao conseguira interagir de forma correta com o notvo this
 */
const novoSeletor = {
    element: document.querySelector('li')
}

Dom.prototype.ativo.call(novoSeletor, 'ativar')

/**
 * arrays e call
 * é comum utilizarmos o call() nas funções de portótipo do construtor Array
 * assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array(array-like)
 */
Array.prototype.mostreThis = function () {
    console.log(this);
}

const frutas2 = ['uva', 'maça', 'banana']
frutas2.mostreThis() //['uva', 'maça', 'banana']

Array.prototype.pop.call(frutas) //remove banana
frutas2.pop() //msm coisa q a função acima

/**
 * array-like
 * HTMLCollection, NodeList e demais objetos do Dom, são parecidos com um array.
 * por isso conseguimos utilizar os mesmos na substituição do this em call
 */
const li = document.querySelectorAll('li')

const filtro = Array.prototype.filter.call(li, function (item) {
    return item.classList.contains('ativo')
})
filtro//retorna os itens que possuem ativo