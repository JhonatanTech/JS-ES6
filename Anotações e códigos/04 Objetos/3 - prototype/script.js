/**
 * prototype
 * A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada
 */
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}
const andre = new Pessoa('André', 28)

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined

/**
 * funcao.prototype
 * É possivel adicionar novas propriedades e métodos ao objeto prototype
 */
Pessoa.prototype.andar = function () {
    return this.nome + ' andou'
}
Pessoa.prototype.nadar = function () {
    return this.nome + ' nadou'
}
console.log(Pessoa.prototype); // retornao objeto

/**
 * Acesso ao protótipo
 * O bojeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor.
 * Lembrando, prototype é uma propriedade e função apenas
 */
const andre = new Pessoa('andre', 45)

andre.nome
andre.idade
andre.andar()
andre.nadar()

/**
 * proto
 * O novo objeto acessa os métodos e propriedades do protótipo através de propriedade __proto__. 
 * É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.
 */
// Acessam o mesmo métodos
// mas __proto__ não terá acesso ao this.nome
andre.andar()
andre.__proto__.andar()

/**
 * Herança de protótipo
 * O objeto possui acesso aos métodos e propiredades do protótipo do construtor responsavel por criar este objeto.
 * O objeto abaixo possui acesso a metodos que nunca definimos, mas são herdados do prototipo de Object
 */
Object.prototype
andre.toString()
andre.isPrototypeOf()
andre.valueOf()