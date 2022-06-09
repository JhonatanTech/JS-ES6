/**
 * Native
 * Objetos natvos são aqueles definidos na especificação da linguagem e são implementados independente do host
 * 
 * Construtores de Objeto nativo:
 * Object
 * String
 * Array
 * Function
 */

/**
 * Host
 * Objetos do host são aqueles implementados pelo próprio ambiente.
 * Por exemplo no browser possuimos objetos do DOM, como DomList, HTMLCollection e outros.
 * Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do browser.
 */

//Objetos do browser
NodeList
HTMLCollection
Element

/**
 * User
 * Objetos do user, são os objetos defenidos pelo seu aplicativo.
 * Ou seja, qualquer obejto quer você criar ou que importar de alguma biblioteca externa.
 * (São objetos que criamos normalmente)
 */

const Pessoa = {
    nome: 'Jhonatan'
}

/**
 * Diferentes versões
 * -Browsers diferentes
 * Apesar de tentarem ao máximo manter um patrão, browser diferentes possuem objetos com propriedades e métodos diferentes
 * 
 * -Versãoes de Browsers
 * Sempre que o browser é atualizado, novos objetos, métodos e propriedades podem ser implementados
 * 
 * -Host e Native Objects
 * Por exemplo, browser que não implementaram o ECMAScript 2015 (ES6), não possuemfinde de Array.
 */

/**
 * Versões do Javascript
 * -ECMA
 * Organização
 * -ECMAScript 2015 ou ES6
 * É a sexta versão do ECMAScript
 * -Engine
 * Existem varias engies que implementam o ECMAScript como V8, SpiderMonkey, Chacka...
 */

/**
 * Bibliotecas
 * Bibliotecas como jQuery foram criadas para resolver o problema de inconsistencia entre browsers e adicionar funcionalidades que não existiam nativamente. A padronização dos browsers e a implementação de soluções nativas, torna as mesmas obsoletas.
 */

$('a').addClass('ativo')
$('a').hide()
$('a').show()

/**
 * Verificar se Existe
 * O typeof retorna o tipo de dado. Caso esse dados não exista ou não tenha sido definido, ele irá retornar undefined. Ou seja, quando não for undefined quer dizer que existe.
 */
if (typeof Array.from !== "undefined") {
    
}
if (typeof NodeList !== "undefined") {
    
}
console.log(typeof Array);

/**
 * API
 * Application Programming Interface, é uma interface de software a interação com outros softwares.
 * Ou seja, toda interação que fazemos com o browser utilizando Objetos, Métodos e Propriedades, estamos na verdade interagindo com a API do browser.
 */