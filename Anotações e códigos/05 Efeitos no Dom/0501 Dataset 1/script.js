/**
 * HTMLElement
 * todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElemnt
 */
const h1 = document.querySelector('h1')
Object.prototype.toString.call(h1)

/**
 * Dataset
 * dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap
 * Dentro desse objeto existe uma coleção de chave/valor, com todos os atributos do elemento
 * html que começarem com data-
 */
//ambos valores selecionam a mesma div acima
let div = document.querySelector('div')
div = document.querySelector('[data-cor]')
div = document.querySelector('[data-cor="azul"]')

div.dataset
//DOMStringMap {cor:"azul", width: "500"}

div.dataset.cor //'azul'
div.dataset.width //'500'
div.dataset.tempo = 1000
//DOMStringMap {cor:"azul", width: "500", tempo:"1000"}

/**
 * Data Atributes
 * Os atributos e valores que começarem com data- poderão ser utilizados como forma
 * de cofiguração de plugins e interações DOM/JS
 */
const divs = document.querySelectorAll('[data-anima]')
divs.forEach((div => {
    div.classList.add(div.dataset.anima)
}))
//adiciona em cada div uma classe com o mesmo nome que o valor de data

/**
 * Data vs Class
 * a vantagem de se utilizar data Atributes é que torna mais facil evitarmos conflitos com estilos do CSS
 * Além de deixar a estrutura da tag mais organizada
 */
//<div data-anima="left" data-tempo="1000">Div 1</div>
//<div class="anima-left tempo-1000">Div 2</div>

/**
 * nomenclatura
 * por padrdrão o Javascript não aceita - (traço) como caracter válido para nomear propriedades
 * Então qualquer traço será removido e a letra seguinte transformada em maiúscula
 */
//<div data-anima-scroll="left">Div 1</div>
const div = document.querySelector('[data-anima-scroll]')
div.dataset
//{animaScroll: 'left'}
div.dataset.animaScroll //left
div.dataset.tempoTotal = 1000
// na div vira data-tempo-total="1000"

delete div.dataset.animaScroll //remove o atributo