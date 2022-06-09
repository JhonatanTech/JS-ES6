/**
 * this Keyword 
 * O this faz referencia ao proprio objeto construido com a construct function
 */
function Carro(marca, precoInicial) {
    this.taxa = 1.2
    const precofinal = precoInicial * this.taxa
    this.marca = marca
    this.preco = precofinal
    console.log(this)
}
const honda = new Carro('honda', 1000)

/**
 * Exemplo real
 * Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos
 */

const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor);
    },
    ativo() {
        this.element().classList.add('ativo');
    },
}
Dom.ativo(); //adicona ativo ao li
Dom.seletor = 'ul'
Dom.ativo() //adicona ativo ao ul