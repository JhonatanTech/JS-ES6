/**
 * DOM - document object model
 * é uma interface que representa docuemntos HTML e XML atraves de objetos, 
 * com ela é possivel manipular a estrutura, estilo e conteudo destes documentos
 */
console.log(window)
//window é um objeto global do browser
//possui diferente metodos e propriedades

window.innerHeight //retorna a altura do browser

/**
 * window e document
 * são os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades
 */
window.alert('isso é um alerta')
alert('isso tbm é um alerta')

document.querySelector('h1') //seleciona o primeiro h1
document.body //retorna o body

//window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades

/**
 * Node
 * toda tag html é representado pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node
 */
const titulo = document.querySelector('h1')

titulo.innerText //retorna o texto
titulo.classList //retorna as classes
titulo.id //retorna o id
titulo.offsetHeight //retorna a altura do elemento

titulo.addEventListener('click', callback) //ativa a função callback ai click no titulo