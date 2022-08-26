/**
 * Objetos
 * Criar um objetos é simples, basta definirmos uma variavel e iniciar a definição do seu valor chaves{} .Mas e se precisarmos criar um novo objeto, com as mesmas caracteristicas do anterior?
 */

const carro = {
    mara: 'marca',
    preco: 0,
}

const honda = carro
honda.mara = 'honda'
honda.preco = 4000

const fiat = carro
fiat.mara = 'fiat'
fiat.preco = 3000

/**
 * Constructor Functions
 * Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma
 */
function Carro() {
    this.marcador = 'marca'
    this.preco = 0
}

const honda = new Carro()
honda.mara = 'honda'
honda.preco = 1000

const fiat = new Carro()
fiat.marca = 'fiat'
fiat.preco = 2000

/**
 * new Keyword 
 * A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela
 */
const honda = new Carro()

//1 criar um novo objeto
honda = {}

//2 define o protótipo
honda.prototype = Carro.prototype

//3 aponta a variavél this para o objeto   
this = honda

//4 executa a função, substituindo this pelo objeto
honda.marca = 'marca'
honda.preco = 0

